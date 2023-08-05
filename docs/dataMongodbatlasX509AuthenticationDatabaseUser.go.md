# `data_mongodbatlas_x509_authentication_database_user`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_x509_authentication_database_user`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user).

# `dataMongodbatlasX509AuthenticationDatabaseUser` Submodule <a name="`dataMongodbatlasX509AuthenticationDatabaseUser` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUser <a name="DataMongodbatlasX509AuthenticationDatabaseUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

datamongodbatlasx509authenticationdatabaseuser.NewDataMongodbatlasX509AuthenticationDatabaseUser(scope Construct, id *string, config DataMongodbatlasX509AuthenticationDatabaseUserConfig) DataMongodbatlasX509AuthenticationDatabaseUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig">DataMongodbatlasX509AuthenticationDatabaseUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig">DataMongodbatlasX509AuthenticationDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId"></a>

```go
func ResetId()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

datamongodbatlasx509authenticationdatabaseuser.DataMongodbatlasX509AuthenticationDatabaseUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

datamongodbatlasx509authenticationdatabaseuser.DataMongodbatlasX509AuthenticationDatabaseUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

datamongodbatlasx509authenticationdatabaseuser.DataMongodbatlasX509AuthenticationDatabaseUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas">CustomerX509Cas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates"></a>

```go
func Certificates() DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a>

---

##### `CustomerX509Cas`<sup>Required</sup> <a name="CustomerX509Cas" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas"></a>

```go
func CustomerX509Cas() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificates <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

&datamongodbatlasx509authenticationdatabaseuser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates {

}
```


### DataMongodbatlasX509AuthenticationDatabaseUserConfig <a name="DataMongodbatlasX509AuthenticationDatabaseUserConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

&datamongodbatlasx509authenticationdatabaseuser.DataMongodbatlasX509AuthenticationDatabaseUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	Id: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

datamongodbatlasx509authenticationdatabaseuser.NewDataMongodbatlasX509AuthenticationDatabaseUserCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get"></a>

```go
func Get(index *f64) DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/datamongodbatlasx509authenticationdatabaseuser"

datamongodbatlasx509authenticationdatabaseuser.NewDataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasX509AuthenticationDatabaseUserCertificates
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a>

---



