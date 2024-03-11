# `privatelinkEndpointServiceServerless` Submodule <a name="`privatelinkEndpointServiceServerless` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceServerless <a name="PrivatelinkEndpointServiceServerless" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless mongodbatlas_privatelink_endpoint_service_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

privatelinkendpointserviceserverless.NewPrivatelinkEndpointServiceServerless(scope Construct, id *string, config PrivatelinkEndpointServiceServerlessConfig) PrivatelinkEndpointServiceServerless
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig">PrivatelinkEndpointServiceServerlessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig">PrivatelinkEndpointServiceServerlessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId">ResetCloudProviderEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress">ResetPrivateEndpointIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts"></a>

```go
func PutTimeouts(value PrivatelinkEndpointServiceServerlessTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

---

##### `ResetCloudProviderEndpointId` <a name="ResetCloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId"></a>

```go
func ResetCloudProviderEndpointId()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateEndpointIpAddress` <a name="ResetPrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress"></a>

```go
func ResetPrivateEndpointIpAddress()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

privatelinkendpointserviceserverless.PrivatelinkEndpointServiceServerless_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

privatelinkendpointserviceserverless.PrivatelinkEndpointServiceServerless_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

privatelinkendpointserviceserverless.PrivatelinkEndpointServiceServerless_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

privatelinkendpointserviceserverless.PrivatelinkEndpointServiceServerless_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivatelinkEndpointServiceServerless to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivatelinkEndpointServiceServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServiceServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId">PrivateLinkServiceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput">CloudProviderEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput">PrivateEndpointIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId">CloudProviderEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress">PrivateEndpointIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateLinkServiceResourceId`<sup>Required</sup> <a name="PrivateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId"></a>

```go
func PrivateLinkServiceResourceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts"></a>

```go
func Timeouts() PrivatelinkEndpointServiceServerlessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a>

---

##### `CloudProviderEndpointIdInput`<sup>Optional</sup> <a name="CloudProviderEndpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput"></a>

```go
func CloudProviderEndpointIdInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointIpAddressInput`<sup>Optional</sup> <a name="PrivateEndpointIpAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput"></a>

```go
func PrivateEndpointIpAddressInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CloudProviderEndpointId`<sup>Required</sup> <a name="CloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId"></a>

```go
func CloudProviderEndpointId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `PrivateEndpointIpAddress`<sup>Required</sup> <a name="PrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress"></a>

```go
func PrivateEndpointIpAddress() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceServerlessConfig <a name="PrivatelinkEndpointServiceServerlessConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

&privatelinkendpointserviceserverless.PrivatelinkEndpointServiceServerlessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointId: *string,
	InstanceName: *string,
	ProjectId: *string,
	ProviderName: *string,
	CloudProviderEndpointId: *string,
	Comment: *string,
	Id: *string,
	PrivateEndpointIpAddress: *string,
	Timeouts: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId">EndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId">CloudProviderEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress">PrivateEndpointIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}.

---

##### `CloudProviderEndpointId`<sup>Optional</sup> <a name="CloudProviderEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId"></a>

```go
CloudProviderEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpointIpAddress`<sup>Optional</sup> <a name="PrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress"></a>

```go
PrivateEndpointIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts"></a>

```go
Timeouts PrivatelinkEndpointServiceServerlessTimeouts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#timeouts PrivatelinkEndpointServiceServerless#timeouts}

---

### PrivatelinkEndpointServiceServerlessTimeouts <a name="PrivatelinkEndpointServiceServerlessTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

&privatelinkendpointserviceserverless.PrivatelinkEndpointServiceServerlessTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceServerlessTimeoutsOutputReference <a name="PrivatelinkEndpointServiceServerlessTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/privatelinkendpointserviceserverless"

privatelinkendpointserviceserverless.NewPrivatelinkEndpointServiceServerlessTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatelinkEndpointServiceServerlessTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



