# `mongodbatlas_cloud_provider_access_authorization`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_access_authorization`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization).

# `cloudProviderAccessAuthorization` Submodule <a name="`cloudProviderAccessAuthorization` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderAccessAuthorization <a name="CloudProviderAccessAuthorization" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization mongodbatlas_cloud_provider_access_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.NewCloudProviderAccessAuthorization(scope Construct, id *string, config CloudProviderAccessAuthorizationConfig) CloudProviderAccessAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig">CloudProviderAccessAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig">CloudProviderAccessAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAws"></a>

```go
func PutAws(value CloudProviderAccessAuthorizationAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAzure"></a>

```go
func PutAzure(value CloudProviderAccessAuthorizationAzure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetAws"></a>

```go
func ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.CloudProviderAccessAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.CloudProviderAccessAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.CloudProviderAccessAuthorization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.authorizedDate">AuthorizedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference">CloudProviderAccessAuthorizationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference">CloudProviderAccessAuthorizationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.featureUsages">FeatureUsages</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList">CloudProviderAccessAuthorizationFeatureUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.awsInput">AwsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.azureInput">AzureInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedDate`<sup>Required</sup> <a name="AuthorizedDate" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.authorizedDate"></a>

```go
func AuthorizedDate() *string
```

- *Type:* *string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.aws"></a>

```go
func Aws() CloudProviderAccessAuthorizationAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference">CloudProviderAccessAuthorizationAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.azure"></a>

```go
func Azure() CloudProviderAccessAuthorizationAzureOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference">CloudProviderAccessAuthorizationAzureOutputReference</a>

---

##### `FeatureUsages`<sup>Required</sup> <a name="FeatureUsages" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.featureUsages"></a>

```go
func FeatureUsages() CloudProviderAccessAuthorizationFeatureUsagesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList">CloudProviderAccessAuthorizationFeatureUsagesList</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.awsInput"></a>

```go
func AwsInput() CloudProviderAccessAuthorizationAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.azureInput"></a>

```go
func AzureInput() CloudProviderAccessAuthorizationAzure
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderAccessAuthorizationAws <a name="CloudProviderAccessAuthorizationAws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

&cloudprovideraccessauthorization.CloudProviderAccessAuthorizationAws {
	IamAssumedRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws.property.iamAssumedRoleArn">IamAssumedRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#iam_assumed_role_arn CloudProviderAccessAuthorization#iam_assumed_role_arn}. |

---

##### `IamAssumedRoleArn`<sup>Required</sup> <a name="IamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws.property.iamAssumedRoleArn"></a>

```go
IamAssumedRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#iam_assumed_role_arn CloudProviderAccessAuthorization#iam_assumed_role_arn}.

---

### CloudProviderAccessAuthorizationAzure <a name="CloudProviderAccessAuthorizationAzure" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

&cloudprovideraccessauthorization.CloudProviderAccessAuthorizationAzure {
	AtlasAzureAppId: *string,
	ServicePrincipalId: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.property.atlasAzureAppId">AtlasAzureAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#atlas_azure_app_id CloudProviderAccessAuthorization#atlas_azure_app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#service_principal_id CloudProviderAccessAuthorization#service_principal_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#tenant_id CloudProviderAccessAuthorization#tenant_id}. |

---

##### `AtlasAzureAppId`<sup>Required</sup> <a name="AtlasAzureAppId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.property.atlasAzureAppId"></a>

```go
AtlasAzureAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#atlas_azure_app_id CloudProviderAccessAuthorization#atlas_azure_app_id}.

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#service_principal_id CloudProviderAccessAuthorization#service_principal_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#tenant_id CloudProviderAccessAuthorization#tenant_id}.

---

### CloudProviderAccessAuthorizationConfig <a name="CloudProviderAccessAuthorizationConfig" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

&cloudprovideraccessauthorization.CloudProviderAccessAuthorizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	RoleId: *string,
	Aws: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws,
	Azure: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#project_id CloudProviderAccessAuthorization#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.roleId">RoleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#role_id CloudProviderAccessAuthorization#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#id CloudProviderAccessAuthorization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#project_id CloudProviderAccessAuthorization#project_id}.

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#role_id CloudProviderAccessAuthorization#role_id}.

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.aws"></a>

```go
Aws CloudProviderAccessAuthorizationAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#aws CloudProviderAccessAuthorization#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.azure"></a>

```go
Azure CloudProviderAccessAuthorizationAzure
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#azure CloudProviderAccessAuthorization#azure}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#id CloudProviderAccessAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudProviderAccessAuthorizationFeatureUsages <a name="CloudProviderAccessAuthorizationFeatureUsages" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

&cloudprovideraccessauthorization.CloudProviderAccessAuthorizationFeatureUsages {

}
```


## Classes <a name="Classes" id="Classes"></a>

### CloudProviderAccessAuthorizationAwsOutputReference <a name="CloudProviderAccessAuthorizationAwsOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.NewCloudProviderAccessAuthorizationAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudProviderAccessAuthorizationAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArnInput">IamAssumedRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArn">IamAssumedRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamAssumedRoleArnInput`<sup>Optional</sup> <a name="IamAssumedRoleArnInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArnInput"></a>

```go
func IamAssumedRoleArnInput() *string
```

- *Type:* *string

---

##### `IamAssumedRoleArn`<sup>Required</sup> <a name="IamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArn"></a>

```go
func IamAssumedRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudProviderAccessAuthorizationAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

---


### CloudProviderAccessAuthorizationAzureOutputReference <a name="CloudProviderAccessAuthorizationAzureOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.NewCloudProviderAccessAuthorizationAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudProviderAccessAuthorizationAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.atlasAzureAppIdInput">AtlasAzureAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.atlasAzureAppId">AtlasAzureAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtlasAzureAppIdInput`<sup>Optional</sup> <a name="AtlasAzureAppIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.atlasAzureAppIdInput"></a>

```go
func AtlasAzureAppIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AtlasAzureAppId`<sup>Required</sup> <a name="AtlasAzureAppId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.atlasAzureAppId"></a>

```go
func AtlasAzureAppId() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudProviderAccessAuthorizationAzure
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAzure">CloudProviderAccessAuthorizationAzure</a>

---


### CloudProviderAccessAuthorizationFeatureUsagesList <a name="CloudProviderAccessAuthorizationFeatureUsagesList" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.NewCloudProviderAccessAuthorizationFeatureUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudProviderAccessAuthorizationFeatureUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.get"></a>

```go
func Get(index *f64) CloudProviderAccessAuthorizationFeatureUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudProviderAccessAuthorizationFeatureUsagesOutputReference <a name="CloudProviderAccessAuthorizationFeatureUsagesOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovideraccessauthorization"

cloudprovideraccessauthorization.NewCloudProviderAccessAuthorizationFeatureUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudProviderAccessAuthorizationFeatureUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureId">FeatureId</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureType">FeatureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages">CloudProviderAccessAuthorizationFeatureUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureId`<sup>Required</sup> <a name="FeatureId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureId"></a>

```go
func FeatureId() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureType"></a>

```go
func FeatureType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudProviderAccessAuthorizationFeatureUsages
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages">CloudProviderAccessAuthorizationFeatureUsages</a>

---



