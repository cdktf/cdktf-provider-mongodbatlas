# `data_mongodbatlas_privatelink_endpoints_service_adl`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_privatelink_endpoints_service_adl`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/data-sources/privatelink_endpoints_service_adl).

# `dataMongodbatlasPrivatelinkEndpointsServiceAdl` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointsServiceAdl` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceAdl <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/data-sources/privatelink_endpoints_service_adl mongodbatlas_privatelink_endpoints_service_adl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.NewDataMongodbatlasPrivatelinkEndpointsServiceAdl(scope Construct, id *string, config DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig) DataMongodbatlasPrivatelinkEndpointsServiceAdl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig">DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig">DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.DataMongodbatlasPrivatelinkEndpointsServiceAdl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.DataMongodbatlasPrivatelinkEndpointsServiceAdl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.DataMongodbatlasPrivatelinkEndpointsServiceAdl_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.links">Links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList">DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.totalCount">TotalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.links"></a>

```go
func Links() DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList</a>

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.results"></a>

```go
func Results() DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList">DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.totalCount"></a>

```go
func TotalCount() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

&datamongodbatlasprivatelinkendpointsserviceadl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/data-sources/privatelink_endpoints_service_adl#project_id DataMongodbatlasPrivatelinkEndpointsServiceAdl#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/data-sources/privatelink_endpoints_service_adl#id DataMongodbatlasPrivatelinkEndpointsServiceAdl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/data-sources/privatelink_endpoints_service_adl#project_id DataMongodbatlasPrivatelinkEndpointsServiceAdl#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.1/docs/data-sources/privatelink_endpoints_service_adl#id DataMongodbatlasPrivatelinkEndpointsServiceAdl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

&datamongodbatlasprivatelinkendpointsserviceadl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks {

}
```


### DataMongodbatlasPrivatelinkEndpointsServiceAdlResults <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

&datamongodbatlasprivatelinkendpointsserviceadl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.NewDataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.get"></a>

```go
func Get(index *f64) DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.NewDataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.href">Href</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.rel">Rel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Href`<sup>Required</sup> <a name="Href" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.href"></a>

```go
func Href() *string
```

- *Type:* *string

---

##### `Rel`<sup>Required</sup> <a name="Rel" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.rel"></a>

```go
func Rel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks</a>

---


### DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.NewDataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlasprivatelinkendpointsserviceadl"

datamongodbatlasprivatelinkendpointsserviceadl.NewDataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults">DataMongodbatlasPrivatelinkEndpointsServiceAdlResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasPrivatelinkEndpointsServiceAdlResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults">DataMongodbatlasPrivatelinkEndpointsServiceAdlResults</a>

---



