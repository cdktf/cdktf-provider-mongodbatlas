# `mongodbatlas_privatelink_endpoint`

Refer to the Terraform Registory for docs: [`mongodbatlas_privatelink_endpoint`](https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint).

# `privatelinkEndpoint` Submodule <a name="`privatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpoint <a name="PrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint mongodbatlas_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

privatelinkendpoint.NewPrivatelinkEndpoint(scope Construct, id *string, config PrivatelinkEndpointConfig) PrivatelinkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig">PrivatelinkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig">PrivatelinkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value PrivatelinkEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts">PrivatelinkEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

privatelinkendpoint.PrivatelinkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

privatelinkendpoint.PrivatelinkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

privatelinkendpoint.PrivatelinkEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.endpointGroupNames">EndpointGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.endpointServiceName">EndpointServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.interfaceEndpoints">InterfaceEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateEndpoints">PrivateEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateLinkId">PrivateLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateLinkServiceName">PrivateLinkServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateLinkServiceResourceId">PrivateLinkServiceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.serviceAttachmentNames">ServiceAttachmentNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference">PrivatelinkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointGroupNames`<sup>Required</sup> <a name="EndpointGroupNames" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.endpointGroupNames"></a>

```go
func EndpointGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `EndpointServiceName`<sup>Required</sup> <a name="EndpointServiceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.endpointServiceName"></a>

```go
func EndpointServiceName() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InterfaceEndpoints`<sup>Required</sup> <a name="InterfaceEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.interfaceEndpoints"></a>

```go
func InterfaceEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpoints`<sup>Required</sup> <a name="PrivateEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateEndpoints"></a>

```go
func PrivateEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateLinkId`<sup>Required</sup> <a name="PrivateLinkId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateLinkId"></a>

```go
func PrivateLinkId() *string
```

- *Type:* *string

---

##### `PrivateLinkServiceName`<sup>Required</sup> <a name="PrivateLinkServiceName" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateLinkServiceName"></a>

```go
func PrivateLinkServiceName() *string
```

- *Type:* *string

---

##### `PrivateLinkServiceResourceId`<sup>Required</sup> <a name="PrivateLinkServiceResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.privateLinkServiceResourceId"></a>

```go
func PrivateLinkServiceResourceId() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `ServiceAttachmentNames`<sup>Required</sup> <a name="ServiceAttachmentNames" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.serviceAttachmentNames"></a>

```go
func ServiceAttachmentNames() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.timeouts"></a>

```go
func Timeouts() PrivatelinkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference">PrivatelinkEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointConfig <a name="PrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

&privatelinkendpoint.PrivatelinkEndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	ProviderName: *string,
	Region: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2.privatelinkEndpoint.PrivatelinkEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#project_id PrivatelinkEndpoint#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#provider_name PrivatelinkEndpoint#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#region PrivatelinkEndpoint#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#id PrivatelinkEndpoint#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts">PrivatelinkEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#project_id PrivatelinkEndpoint#project_id}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#provider_name PrivatelinkEndpoint#provider_name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#region PrivatelinkEndpoint#region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#id PrivatelinkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointConfig.property.timeouts"></a>

```go
Timeouts PrivatelinkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts">PrivatelinkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#timeouts PrivatelinkEndpoint#timeouts}

---

### PrivatelinkEndpointTimeouts <a name="PrivatelinkEndpointTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

&privatelinkendpoint.PrivatelinkEndpointTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#create PrivatelinkEndpoint#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#delete PrivatelinkEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#create PrivatelinkEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/privatelink_endpoint#delete PrivatelinkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointTimeoutsOutputReference <a name="PrivatelinkEndpointTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/privatelinkendpoint"

privatelinkendpoint.NewPrivatelinkEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatelinkEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpoint.PrivatelinkEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



