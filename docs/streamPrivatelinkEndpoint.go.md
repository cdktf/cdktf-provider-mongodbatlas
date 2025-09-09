# `streamPrivatelinkEndpoint` Submodule <a name="`streamPrivatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamPrivatelinkEndpoint <a name="StreamPrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/streamprivatelinkendpoint"

streamprivatelinkendpoint.NewStreamPrivatelinkEndpoint(scope Construct, id *string, config StreamPrivatelinkEndpointConfig) StreamPrivatelinkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig">StreamPrivatelinkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig">StreamPrivatelinkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain">ResetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain">ResetDnsSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId">ResetServiceEndpointId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetArn"></a>

```go
func ResetArn()
```

##### `ResetDnsDomain` <a name="ResetDnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain"></a>

```go
func ResetDnsDomain()
```

##### `ResetDnsSubDomain` <a name="ResetDnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain"></a>

```go
func ResetDnsSubDomain()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceEndpointId` <a name="ResetServiceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId"></a>

```go
func ResetServiceEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/streamprivatelinkendpoint"

streamprivatelinkendpoint.StreamPrivatelinkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/streamprivatelinkendpoint"

streamprivatelinkendpoint.StreamPrivatelinkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/streamprivatelinkendpoint"

streamprivatelinkendpoint.StreamPrivatelinkEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/streamprivatelinkendpoint"

streamprivatelinkendpoint.StreamPrivatelinkEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamPrivatelinkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamPrivatelinkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamPrivatelinkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId">InterfaceEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointName">InterfaceEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerAccountId">ProviderAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput">DnsDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput">DnsSubDomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput">ServiceEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput">VendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain">DnsSubDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId">ServiceEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceEndpointId`<sup>Required</sup> <a name="InterfaceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId"></a>

```go
func InterfaceEndpointId() *string
```

- *Type:* *string

---

##### `InterfaceEndpointName`<sup>Required</sup> <a name="InterfaceEndpointName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointName"></a>

```go
func InterfaceEndpointName() *string
```

- *Type:* *string

---

##### `ProviderAccountId`<sup>Required</sup> <a name="ProviderAccountId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerAccountId"></a>

```go
func ProviderAccountId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DnsDomainInput`<sup>Optional</sup> <a name="DnsDomainInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput"></a>

```go
func DnsDomainInput() *string
```

- *Type:* *string

---

##### `DnsSubDomainInput`<sup>Optional</sup> <a name="DnsSubDomainInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput"></a>

```go
func DnsSubDomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceEndpointIdInput`<sup>Optional</sup> <a name="ServiceEndpointIdInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput"></a>

```go
func ServiceEndpointIdInput() *string
```

- *Type:* *string

---

##### `VendorInput`<sup>Optional</sup> <a name="VendorInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput"></a>

```go
func VendorInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain"></a>

```go
func DnsDomain() *string
```

- *Type:* *string

---

##### `DnsSubDomain`<sup>Required</sup> <a name="DnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain"></a>

```go
func DnsSubDomain() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceEndpointId`<sup>Required</sup> <a name="ServiceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId"></a>

```go
func ServiceEndpointId() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamPrivatelinkEndpointConfig <a name="StreamPrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v8/streamprivatelinkendpoint"

&streamprivatelinkendpoint.StreamPrivatelinkEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	ProviderName: *string,
	Vendor: *string,
	Arn: *string,
	DnsDomain: *string,
	DnsSubDomain: *[]*string,
	Region: *string,
	ServiceEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Provider where the endpoint is deployed. Valid values are AWS and AZURE. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor">Vendor</a></code> | <code>*string</code> | Vendor that manages the endpoint. The following are the vendor values per provider:. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.arn">Arn</a></code> | <code>*string</code> | Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | The domain hostname. Required for the following provider and vendor combinations: 				 	* AWS provider with CONFLUENT vendor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain">DnsSubDomain</a></code> | <code>*[]*string</code> | Sub-Domain name of Confluent cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region">Region</a></code> | <code>*string</code> | The region of the Provider’s cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId">ServiceEndpointId</a></code> | <code>*string</code> | For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Provider where the endpoint is deployed. Valid values are AWS and AZURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor"></a>

```go
Vendor *string
```

- *Type:* *string

Vendor that manages the endpoint. The following are the vendor values per provider:.

* **AWS**: MSK, CONFLUENT, and S3

  * **Azure**: EVENTHUB and CONFLUENT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#arn StreamPrivatelinkEndpoint#arn}

---

##### `DnsDomain`<sup>Optional</sup> <a name="DnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain"></a>

```go
DnsDomain *string
```

- *Type:* *string

The domain hostname. Required for the following provider and vendor combinations: 				 	* AWS provider with CONFLUENT vendor.

* AZURE provider with EVENTHUB or CONFLUENT vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}

---

##### `DnsSubDomain`<sup>Optional</sup> <a name="DnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain"></a>

```go
DnsSubDomain *[]*string
```

- *Type:* *[]*string

Sub-Domain name of Confluent cluster.

These are typically your availability zones. Required for AWS Provider and CONFLUENT vendor. If your AWS CONFLUENT cluster doesn't use subdomains, you must set this to the empty array [].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the Provider’s cluster.

See [AZURE](https://www.mongodb.com/docs/atlas/reference/microsoft-azure/#stream-processing-instances) and [AWS](https://www.mongodb.com/docs/atlas/reference/amazon-aws/#stream-processing-instances) supported regions. When the vendor is `CONFLUENT`, this is the domain name of Confluent cluster. When the vendor is `MSK`, this is computed by the API from the provided `arn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}

---

##### `ServiceEndpointId`<sup>Optional</sup> <a name="ServiceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId"></a>

```go
ServiceEndpointId *string
```

- *Type:* *string

For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}

---



