# `encryptionAtRest` Submodule <a name="`encryptionAtRest` Submodule" id="@cdktf/provider-mongodbatlas.encryptionAtRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptionAtRest <a name="EncryptionAtRest" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest mongodbatlas_encryption_at_rest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRest(scope Construct, id *string, config EncryptionAtRestConfig) EncryptionAtRest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig">EncryptionAtRestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig">EncryptionAtRestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig">PutAwsKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig">PutAzureKeyVaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig">PutGoogleCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig">ResetAwsKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig">ResetAzureKeyVaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig">ResetGoogleCloudKmsConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsKmsConfig` <a name="PutAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig"></a>

```go
func PutAwsKmsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAwsKmsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzureKeyVaultConfig` <a name="PutAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig"></a>

```go
func PutAzureKeyVaultConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putAzureKeyVaultConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGoogleCloudKmsConfig` <a name="PutGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig"></a>

```go
func PutGoogleCloudKmsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.putGoogleCloudKmsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsKmsConfig` <a name="ResetAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAwsKmsConfig"></a>

```go
func ResetAwsKmsConfig()
```

##### `ResetAzureKeyVaultConfig` <a name="ResetAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetAzureKeyVaultConfig"></a>

```go
func ResetAzureKeyVaultConfig()
```

##### `ResetGoogleCloudKmsConfig` <a name="ResetGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.resetGoogleCloudKmsConfig"></a>

```go
func ResetGoogleCloudKmsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.EncryptionAtRest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.EncryptionAtRest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.EncryptionAtRest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.EncryptionAtRest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EncryptionAtRest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EncryptionAtRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EncryptionAtRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig">AwsKmsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList">EncryptionAtRestAwsKmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig">AzureKeyVaultConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList">EncryptionAtRestAzureKeyVaultConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig">GoogleCloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList">EncryptionAtRestGoogleCloudKmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput">AwsKmsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput">AzureKeyVaultConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput">GoogleCloudKmsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsKmsConfig`<sup>Required</sup> <a name="AwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfig"></a>

```go
func AwsKmsConfig() EncryptionAtRestAwsKmsConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList">EncryptionAtRestAwsKmsConfigList</a>

---

##### `AzureKeyVaultConfig`<sup>Required</sup> <a name="AzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfig"></a>

```go
func AzureKeyVaultConfig() EncryptionAtRestAzureKeyVaultConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList">EncryptionAtRestAzureKeyVaultConfigList</a>

---

##### `GoogleCloudKmsConfig`<sup>Required</sup> <a name="GoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfig"></a>

```go
func GoogleCloudKmsConfig() EncryptionAtRestGoogleCloudKmsConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList">EncryptionAtRestGoogleCloudKmsConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AwsKmsConfigInput`<sup>Optional</sup> <a name="AwsKmsConfigInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.awsKmsConfigInput"></a>

```go
func AwsKmsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AzureKeyVaultConfigInput`<sup>Optional</sup> <a name="AzureKeyVaultConfigInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.azureKeyVaultConfigInput"></a>

```go
func AzureKeyVaultConfigInput() interface{}
```

- *Type:* interface{}

---

##### `GoogleCloudKmsConfigInput`<sup>Optional</sup> <a name="GoogleCloudKmsConfigInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.googleCloudKmsConfigInput"></a>

```go
func GoogleCloudKmsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EncryptionAtRestAwsKmsConfig <a name="EncryptionAtRestAwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

&encryptionatrest.EncryptionAtRestAwsKmsConfig {
	AccessKeyId: *string,
	CustomerMasterKeyId: *string,
	Enabled: interface{},
	Region: *string,
	RequirePrivateNetworking: interface{},
	RoleId: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Unique alphanumeric string that identifies an Identity and Access Management (IAM) access key with permissions required to access your Amazon Web Services (AWS) Customer Master Key (CMK). |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId">CustomerMasterKeyId</a></code> | <code>*string</code> | Unique alphanumeric string that identifies the Amazon Web Services (AWS) Customer Master Key (CMK) you used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that indicates whether someone enabled encryption at rest for the specified project through Amazon Web Services (AWS) Key Management Service (KMS). |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region">Region</a></code> | <code>*string</code> | Physical location where MongoDB Atlas deploys your AWS-hosted MongoDB cluster nodes. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.requirePrivateNetworking">RequirePrivateNetworking</a></code> | <code>interface{}</code> | Enable connection to your Amazon Web Services (AWS) Key Management Service (KMS) over private networking. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId">RoleId</a></code> | <code>*string</code> | Unique 24-hexadecimal digit string that identifies an Amazon Web Services (AWS) Identity and Access Management (IAM) role. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Human-readable label of the Identity and Access Management (IAM) secret access key with permissions required to access your Amazon Web Services (AWS) customer master key. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Unique alphanumeric string that identifies an Identity and Access Management (IAM) access key with permissions required to access your Amazon Web Services (AWS) Customer Master Key (CMK).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}

---

##### `CustomerMasterKeyId`<sup>Optional</sup> <a name="CustomerMasterKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.customerMasterKeyId"></a>

```go
CustomerMasterKeyId *string
```

- *Type:* *string

Unique alphanumeric string that identifies the Amazon Web Services (AWS) Customer Master Key (CMK) you used to encrypt and decrypt the MongoDB master keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that indicates whether someone enabled encryption at rest for the specified project through Amazon Web Services (AWS) Key Management Service (KMS).

To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Physical location where MongoDB Atlas deploys your AWS-hosted MongoDB cluster nodes.

The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Atlas creates them as part of the deployment. MongoDB Atlas assigns the VPC a CIDR block. To limit a new VPC peering connection to one CIDR block and region, create the connection first. Deploy the cluster after the connection starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#region EncryptionAtRest#region}

---

##### `RequirePrivateNetworking`<sup>Optional</sup> <a name="RequirePrivateNetworking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.requirePrivateNetworking"></a>

```go
RequirePrivateNetworking interface{}
```

- *Type:* interface{}

Enable connection to your Amazon Web Services (AWS) Key Management Service (KMS) over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#require_private_networking EncryptionAtRest#require_private_networking}

---

##### `RoleId`<sup>Optional</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Unique 24-hexadecimal digit string that identifies an Amazon Web Services (AWS) Identity and Access Management (IAM) role.

This IAM role has the permissions required to manage your AWS customer master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfig.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Human-readable label of the Identity and Access Management (IAM) secret access key with permissions required to access your Amazon Web Services (AWS) customer master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}

---

### EncryptionAtRestAzureKeyVaultConfig <a name="EncryptionAtRestAzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

&encryptionatrest.EncryptionAtRestAzureKeyVaultConfig {
	AzureEnvironment: *string,
	ClientId: *string,
	Enabled: interface{},
	KeyIdentifier: *string,
	KeyVaultName: *string,
	RequirePrivateNetworking: interface{},
	ResourceGroupName: *string,
	Secret: *string,
	SubscriptionId: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment">AzureEnvironment</a></code> | <code>*string</code> | Azure environment in which your account credentials reside. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Unique 36-hexadecimal character string that identifies an Azure application associated with your Azure Active Directory tenant. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that indicates whether someone enabled encryption at rest for the specified  project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier">KeyIdentifier</a></code> | <code>*string</code> | Web address with a unique key that identifies for your Azure Key Vault. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName">KeyVaultName</a></code> | <code>*string</code> | Unique string that identifies the Azure Key Vault that contains your key. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.requirePrivateNetworking">RequirePrivateNetworking</a></code> | <code>interface{}</code> | Enable connection to your Azure Key Vault over private networking. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Name of the Azure resource group that contains your Azure Key Vault. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret">Secret</a></code> | <code>*string</code> | Private data that you need secured and that belongs to the specified Azure Key Vault (AKV) tenant (**azureKeyVault.tenantID**). This data can include any type of sensitive data such as passwords, database connection strings, API keys, and the like. AKV stores this information as encrypted binary data. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Unique 36-hexadecimal character string that identifies your Azure subscription. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Unique 36-hexadecimal character string that identifies the Azure Active Directory tenant within your Azure subscription. |

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.azureEnvironment"></a>

```go
AzureEnvironment *string
```

- *Type:* *string

Azure environment in which your account credentials reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Unique 36-hexadecimal character string that identifies an Azure application associated with your Azure Active Directory tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that indicates whether someone enabled encryption at rest for the specified  project.

To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}

---

##### `KeyIdentifier`<sup>Optional</sup> <a name="KeyIdentifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyIdentifier"></a>

```go
KeyIdentifier *string
```

- *Type:* *string

Web address with a unique key that identifies for your Azure Key Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}

---

##### `KeyVaultName`<sup>Optional</sup> <a name="KeyVaultName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.keyVaultName"></a>

```go
KeyVaultName *string
```

- *Type:* *string

Unique string that identifies the Azure Key Vault that contains your key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}

---

##### `RequirePrivateNetworking`<sup>Optional</sup> <a name="RequirePrivateNetworking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.requirePrivateNetworking"></a>

```go
RequirePrivateNetworking interface{}
```

- *Type:* interface{}

Enable connection to your Azure Key Vault over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#require_private_networking EncryptionAtRest#require_private_networking}

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Name of the Azure resource group that contains your Azure Key Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Private data that you need secured and that belongs to the specified Azure Key Vault (AKV) tenant (**azureKeyVault.tenantID**). This data can include any type of sensitive data such as passwords, database connection strings, API keys, and the like. AKV stores this information as encrypted binary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Unique 36-hexadecimal character string that identifies your Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Unique 36-hexadecimal character string that identifies the Azure Active Directory tenant within your Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}

---

### EncryptionAtRestConfig <a name="EncryptionAtRestConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

&encryptionatrest.EncryptionAtRestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	AwsKmsConfig: interface{},
	AzureKeyVaultConfig: interface{},
	GoogleCloudKmsConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig">AwsKmsConfig</a></code> | <code>interface{}</code> | aws_kms_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig">AzureKeyVaultConfig</a></code> | <code>interface{}</code> | azure_key_vault_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig">GoogleCloudKmsConfig</a></code> | <code>interface{}</code> | google_cloud_kms_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}

---

##### `AwsKmsConfig`<sup>Optional</sup> <a name="AwsKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.awsKmsConfig"></a>

```go
AwsKmsConfig interface{}
```

- *Type:* interface{}

aws_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}

---

##### `AzureKeyVaultConfig`<sup>Optional</sup> <a name="AzureKeyVaultConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.azureKeyVaultConfig"></a>

```go
AzureKeyVaultConfig interface{}
```

- *Type:* interface{}

azure_key_vault_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}

---

##### `GoogleCloudKmsConfig`<sup>Optional</sup> <a name="GoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestConfig.property.googleCloudKmsConfig"></a>

```go
GoogleCloudKmsConfig interface{}
```

- *Type:* interface{}

google_cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}

---

### EncryptionAtRestGoogleCloudKmsConfig <a name="EncryptionAtRestGoogleCloudKmsConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

&encryptionatrest.EncryptionAtRestGoogleCloudKmsConfig {
	Enabled: interface{},
	KeyVersionResourceId: *string,
	ServiceAccountKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that indicates whether someone enabled encryption at rest for the specified  project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId">KeyVersionResourceId</a></code> | <code>*string</code> | Resource path that displays the key version resource ID for your Google Cloud KMS. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey">ServiceAccountKey</a></code> | <code>*string</code> | JavaScript Object Notation (JSON) object that contains the Google Cloud Key Management Service (KMS). |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that indicates whether someone enabled encryption at rest for the specified  project.

To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}

---

##### `KeyVersionResourceId`<sup>Optional</sup> <a name="KeyVersionResourceId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.keyVersionResourceId"></a>

```go
KeyVersionResourceId *string
```

- *Type:* *string

Resource path that displays the key version resource ID for your Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}

---

##### `ServiceAccountKey`<sup>Optional</sup> <a name="ServiceAccountKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfig.property.serviceAccountKey"></a>

```go
ServiceAccountKey *string
```

- *Type:* *string

JavaScript Object Notation (JSON) object that contains the Google Cloud Key Management Service (KMS).

Format the JSON as a string and not as an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}

---

## Classes <a name="Classes" id="Classes"></a>

### EncryptionAtRestAwsKmsConfigList <a name="EncryptionAtRestAwsKmsConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRestAwsKmsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EncryptionAtRestAwsKmsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get"></a>

```go
func Get(index *f64) EncryptionAtRestAwsKmsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EncryptionAtRestAwsKmsConfigOutputReference <a name="EncryptionAtRestAwsKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRestAwsKmsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EncryptionAtRestAwsKmsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetCustomerMasterKeyId">ResetCustomerMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRequirePrivateNetworking">ResetRequirePrivateNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRoleId">ResetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetCustomerMasterKeyId` <a name="ResetCustomerMasterKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetCustomerMasterKeyId"></a>

```go
func ResetCustomerMasterKeyId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRequirePrivateNetworking` <a name="ResetRequirePrivateNetworking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRequirePrivateNetworking"></a>

```go
func ResetRequirePrivateNetworking()
```

##### `ResetRoleId` <a name="ResetRoleId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetRoleId"></a>

```go
func ResetRoleId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.valid">Valid</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput">CustomerMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworkingInput">RequirePrivateNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId">CustomerMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworking">RequirePrivateNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.valid"></a>

```go
func Valid() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `CustomerMasterKeyIdInput`<sup>Optional</sup> <a name="CustomerMasterKeyIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyIdInput"></a>

```go
func CustomerMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RequirePrivateNetworkingInput`<sup>Optional</sup> <a name="RequirePrivateNetworkingInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworkingInput"></a>

```go
func RequirePrivateNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `CustomerMasterKeyId`<sup>Required</sup> <a name="CustomerMasterKeyId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.customerMasterKeyId"></a>

```go
func CustomerMasterKeyId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RequirePrivateNetworking`<sup>Required</sup> <a name="RequirePrivateNetworking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.requirePrivateNetworking"></a>

```go
func RequirePrivateNetworking() interface{}
```

- *Type:* interface{}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAwsKmsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EncryptionAtRestAzureKeyVaultConfigList <a name="EncryptionAtRestAzureKeyVaultConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRestAzureKeyVaultConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EncryptionAtRestAzureKeyVaultConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get"></a>

```go
func Get(index *f64) EncryptionAtRestAzureKeyVaultConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EncryptionAtRestAzureKeyVaultConfigOutputReference <a name="EncryptionAtRestAzureKeyVaultConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRestAzureKeyVaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EncryptionAtRestAzureKeyVaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetAzureEnvironment">ResetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier">ResetKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName">ResetKeyVaultName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetRequirePrivateNetworking">ResetRequirePrivateNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureEnvironment` <a name="ResetAzureEnvironment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetAzureEnvironment"></a>

```go
func ResetAzureEnvironment()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKeyIdentifier` <a name="ResetKeyIdentifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyIdentifier"></a>

```go
func ResetKeyIdentifier()
```

##### `ResetKeyVaultName` <a name="ResetKeyVaultName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetKeyVaultName"></a>

```go
func ResetKeyVaultName()
```

##### `ResetRequirePrivateNetworking` <a name="ResetRequirePrivateNetworking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetRequirePrivateNetworking"></a>

```go
func ResetRequirePrivateNetworking()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.valid">Valid</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput">AzureEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput">KeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput">KeyVaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworkingInput">RequirePrivateNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment">AzureEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier">KeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName">KeyVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworking">RequirePrivateNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.valid"></a>

```go
func Valid() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AzureEnvironmentInput`<sup>Optional</sup> <a name="AzureEnvironmentInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironmentInput"></a>

```go
func AzureEnvironmentInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyIdentifierInput`<sup>Optional</sup> <a name="KeyIdentifierInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifierInput"></a>

```go
func KeyIdentifierInput() *string
```

- *Type:* *string

---

##### `KeyVaultNameInput`<sup>Optional</sup> <a name="KeyVaultNameInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultNameInput"></a>

```go
func KeyVaultNameInput() *string
```

- *Type:* *string

---

##### `RequirePrivateNetworkingInput`<sup>Optional</sup> <a name="RequirePrivateNetworkingInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworkingInput"></a>

```go
func RequirePrivateNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AzureEnvironment`<sup>Required</sup> <a name="AzureEnvironment" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.azureEnvironment"></a>

```go
func AzureEnvironment() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KeyIdentifier`<sup>Required</sup> <a name="KeyIdentifier" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyIdentifier"></a>

```go
func KeyIdentifier() *string
```

- *Type:* *string

---

##### `KeyVaultName`<sup>Required</sup> <a name="KeyVaultName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.keyVaultName"></a>

```go
func KeyVaultName() *string
```

- *Type:* *string

---

##### `RequirePrivateNetworking`<sup>Required</sup> <a name="RequirePrivateNetworking" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.requirePrivateNetworking"></a>

```go
func RequirePrivateNetworking() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestAzureKeyVaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EncryptionAtRestGoogleCloudKmsConfigList <a name="EncryptionAtRestGoogleCloudKmsConfigList" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRestGoogleCloudKmsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EncryptionAtRestGoogleCloudKmsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get"></a>

```go
func Get(index *f64) EncryptionAtRestGoogleCloudKmsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EncryptionAtRestGoogleCloudKmsConfigOutputReference <a name="EncryptionAtRestGoogleCloudKmsConfigOutputReference" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/encryptionatrest"

encryptionatrest.NewEncryptionAtRestGoogleCloudKmsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EncryptionAtRestGoogleCloudKmsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetKeyVersionResourceId">ResetKeyVersionResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetServiceAccountKey">ResetServiceAccountKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKeyVersionResourceId` <a name="ResetKeyVersionResourceId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetKeyVersionResourceId"></a>

```go
func ResetKeyVersionResourceId()
```

##### `ResetServiceAccountKey` <a name="ResetServiceAccountKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.resetServiceAccountKey"></a>

```go
func ResetServiceAccountKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.valid">Valid</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput">KeyVersionResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput">ServiceAccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId">KeyVersionResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey">ServiceAccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.valid"></a>

```go
func Valid() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVersionResourceIdInput`<sup>Optional</sup> <a name="KeyVersionResourceIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceIdInput"></a>

```go
func KeyVersionResourceIdInput() *string
```

- *Type:* *string

---

##### `ServiceAccountKeyInput`<sup>Optional</sup> <a name="ServiceAccountKeyInput" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKeyInput"></a>

```go
func ServiceAccountKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KeyVersionResourceId`<sup>Required</sup> <a name="KeyVersionResourceId" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.keyVersionResourceId"></a>

```go
func KeyVersionResourceId() *string
```

- *Type:* *string

---

##### `ServiceAccountKey`<sup>Required</sup> <a name="ServiceAccountKey" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.serviceAccountKey"></a>

```go
func ServiceAccountKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.encryptionAtRest.EncryptionAtRestGoogleCloudKmsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



