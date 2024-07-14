# `ldapConfiguration` Submodule <a name="`ldapConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.ldapConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapConfiguration <a name="LdapConfiguration" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration mongodbatlas_ldap_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.NewLdapConfiguration(scope Construct, id *string, config LdapConfigurationConfig) LdapConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig">LdapConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig">LdapConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping">PutUserToDnMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled">ResetAuthorizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate">ResetAuthzQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping">ResetUserToDnMapping</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUserToDnMapping` <a name="PutUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping"></a>

```go
func PutUserToDnMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizationEnabled` <a name="ResetAuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled"></a>

```go
func ResetAuthorizationEnabled()
```

##### `ResetAuthzQueryTemplate` <a name="ResetAuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate"></a>

```go
func ResetAuthzQueryTemplate()
```

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate"></a>

```go
func ResetCaCertificate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort"></a>

```go
func ResetPort()
```

##### `ResetUserToDnMapping` <a name="ResetUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping"></a>

```go
func ResetUserToDnMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.LdapConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.LdapConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.LdapConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.LdapConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LdapConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LdapConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LdapConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping">UserToDnMapping</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput">AuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput">AuthorizationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput">AuthzQueryTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput">BindPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput">BindUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput">UserToDnMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled">AuthorizationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate">AuthzQueryTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword">BindPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername">BindUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserToDnMapping`<sup>Required</sup> <a name="UserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping"></a>

```go
func UserToDnMapping() LdapConfigurationUserToDnMappingList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a>

---

##### `AuthenticationEnabledInput`<sup>Optional</sup> <a name="AuthenticationEnabledInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput"></a>

```go
func AuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationEnabledInput`<sup>Optional</sup> <a name="AuthorizationEnabledInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput"></a>

```go
func AuthorizationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuthzQueryTemplateInput`<sup>Optional</sup> <a name="AuthzQueryTemplateInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput"></a>

```go
func AuthzQueryTemplateInput() *string
```

- *Type:* *string

---

##### `BindPasswordInput`<sup>Optional</sup> <a name="BindPasswordInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput"></a>

```go
func BindPasswordInput() *string
```

- *Type:* *string

---

##### `BindUsernameInput`<sup>Optional</sup> <a name="BindUsernameInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput"></a>

```go
func BindUsernameInput() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `UserToDnMappingInput`<sup>Optional</sup> <a name="UserToDnMappingInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput"></a>

```go
func UserToDnMappingInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled"></a>

```go
func AuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationEnabled`<sup>Required</sup> <a name="AuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled"></a>

```go
func AuthorizationEnabled() interface{}
```

- *Type:* interface{}

---

##### `AuthzQueryTemplate`<sup>Required</sup> <a name="AuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate"></a>

```go
func AuthzQueryTemplate() *string
```

- *Type:* *string

---

##### `BindPassword`<sup>Required</sup> <a name="BindPassword" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword"></a>

```go
func BindPassword() *string
```

- *Type:* *string

---

##### `BindUsername`<sup>Required</sup> <a name="BindUsername" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername"></a>

```go
func BindUsername() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapConfigurationConfig <a name="LdapConfigurationConfig" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

&ldapconfiguration.LdapConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationEnabled: interface{},
	BindPassword: *string,
	BindUsername: *string,
	Hostname: *string,
	ProjectId: *string,
	AuthorizationEnabled: interface{},
	AuthzQueryTemplate: *string,
	CaCertificate: *string,
	Id: *string,
	Port: *f64,
	UserToDnMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword">BindPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername">BindUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled">AuthorizationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate">AuthzQueryTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#id LdapConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#port LdapConfiguration#port}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping">UserToDnMapping</a></code> | <code>interface{}</code> | user_to_dn_mapping block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled"></a>

```go
AuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}.

---

##### `BindPassword`<sup>Required</sup> <a name="BindPassword" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword"></a>

```go
BindPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}.

---

##### `BindUsername`<sup>Required</sup> <a name="BindUsername" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername"></a>

```go
BindUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}.

---

##### `AuthorizationEnabled`<sup>Optional</sup> <a name="AuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled"></a>

```go
AuthorizationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}.

---

##### `AuthzQueryTemplate`<sup>Optional</sup> <a name="AuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate"></a>

```go
AuthzQueryTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}.

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#id LdapConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#port LdapConfiguration#port}.

---

##### `UserToDnMapping`<sup>Optional</sup> <a name="UserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping"></a>

```go
UserToDnMapping interface{}
```

- *Type:* interface{}

user_to_dn_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#user_to_dn_mapping LdapConfiguration#user_to_dn_mapping}

---

### LdapConfigurationUserToDnMapping <a name="LdapConfigurationUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

&ldapconfiguration.LdapConfigurationUserToDnMapping {
	LdapQuery: *string,
	Match: *string,
	Substitution: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery">LdapQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match">Match</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#match LdapConfiguration#match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution">Substitution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}. |

---

##### `LdapQuery`<sup>Optional</sup> <a name="LdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery"></a>

```go
LdapQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match"></a>

```go
Match *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#match LdapConfiguration#match}.

---

##### `Substitution`<sup>Optional</sup> <a name="Substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution"></a>

```go
Substitution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapConfigurationUserToDnMappingList <a name="LdapConfigurationUserToDnMappingList" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.NewLdapConfigurationUserToDnMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LdapConfigurationUserToDnMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get"></a>

```go
func Get(index *f64) LdapConfigurationUserToDnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LdapConfigurationUserToDnMappingOutputReference <a name="LdapConfigurationUserToDnMappingOutputReference" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/ldapconfiguration"

ldapconfiguration.NewLdapConfigurationUserToDnMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LdapConfigurationUserToDnMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery">ResetLdapQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution">ResetSubstitution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLdapQuery` <a name="ResetLdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery"></a>

```go
func ResetLdapQuery()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetSubstitution` <a name="ResetSubstitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution"></a>

```go
func ResetSubstitution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput">LdapQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput">SubstitutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery">LdapQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution">Substitution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LdapQueryInput`<sup>Optional</sup> <a name="LdapQueryInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput"></a>

```go
func LdapQueryInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `SubstitutionInput`<sup>Optional</sup> <a name="SubstitutionInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput"></a>

```go
func SubstitutionInput() *string
```

- *Type:* *string

---

##### `LdapQuery`<sup>Required</sup> <a name="LdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery"></a>

```go
func LdapQuery() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Substitution`<sup>Required</sup> <a name="Substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution"></a>

```go
func Substitution() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



