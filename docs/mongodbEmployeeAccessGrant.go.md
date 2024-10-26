# `mongodbEmployeeAccessGrant` Submodule <a name="`mongodbEmployeeAccessGrant` Submodule" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbEmployeeAccessGrant <a name="MongodbEmployeeAccessGrant" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/mongodb_employee_access_grant mongodbatlas_mongodb_employee_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/mongodbemployeeaccessgrant"

mongodbemployeeaccessgrant.NewMongodbEmployeeAccessGrant(scope Construct, id *string, config MongodbEmployeeAccessGrantConfig) MongodbEmployeeAccessGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig">MongodbEmployeeAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig">MongodbEmployeeAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/mongodbemployeeaccessgrant"

mongodbemployeeaccessgrant.MongodbEmployeeAccessGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/mongodbemployeeaccessgrant"

mongodbemployeeaccessgrant.MongodbEmployeeAccessGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/mongodbemployeeaccessgrant"

mongodbemployeeaccessgrant.MongodbEmployeeAccessGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/mongodbemployeeaccessgrant"

mongodbemployeeaccessgrant.MongodbEmployeeAccessGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MongodbEmployeeAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MongodbEmployeeAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/mongodb_employee_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MongodbEmployeeAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantTypeInput">GrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantType">GrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *string
```

- *Type:* *string

---

##### `GrantTypeInput`<sup>Optional</sup> <a name="GrantTypeInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantTypeInput"></a>

```go
func GrantTypeInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.grantType"></a>

```go
func GrantType() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbEmployeeAccessGrantConfig <a name="MongodbEmployeeAccessGrantConfig" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/mongodbemployeeaccessgrant"

&mongodbemployeeaccessgrant.MongodbEmployeeAccessGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ExpirationTime: *string,
	GrantType: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Human-readable label that identifies this cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | Expiration date for the employee access grant. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.grantType">GrantType</a></code> | <code>*string</code> | Level of access to grant to MongoDB Employees. Possible values are CLUSTER_DATABASE_LOGS, CLUSTER_INFRASTRUCTURE or CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA. |
| <code><a href="#@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Human-readable label that identifies this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/mongodb_employee_access_grant#cluster_name MongodbEmployeeAccessGrant#cluster_name}

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.expirationTime"></a>

```go
ExpirationTime *string
```

- *Type:* *string

Expiration date for the employee access grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/mongodb_employee_access_grant#expiration_time MongodbEmployeeAccessGrant#expiration_time}

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.grantType"></a>

```go
GrantType *string
```

- *Type:* *string

Level of access to grant to MongoDB Employees. Possible values are CLUSTER_DATABASE_LOGS, CLUSTER_INFRASTRUCTURE or CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/mongodb_employee_access_grant#grant_type MongodbEmployeeAccessGrant#grant_type}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.mongodbEmployeeAccessGrant.MongodbEmployeeAccessGrantConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/mongodb_employee_access_grant#project_id MongodbEmployeeAccessGrant#project_id}

---



