# `dataMongodbatlasBackupCompliancePolicy` Submodule <a name="`dataMongodbatlasBackupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasBackupCompliancePolicy <a name="DataMongodbatlasBackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicy(scope Construct, id *string, config DataMongodbatlasBackupCompliancePolicyConfig) DataMongodbatlasBackupCompliancePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig">DataMongodbatlasBackupCompliancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig">DataMongodbatlasBackupCompliancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasBackupCompliancePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasBackupCompliancePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasBackupCompliancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasBackupCompliancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasBackupCompliancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedEmail">AuthorizedEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserFirstName">AuthorizedUserFirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserLastName">AuthorizedUserLastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.copyProtectionEnabled">CopyProtectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.encryptionAtRestEnabled">EncryptionAtRestEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItem">OnDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.pitEnabled">PitEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList">DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList">DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemYearly">PolicyItemYearly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedDate">UpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedUser">UpdatedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuthorizedEmail`<sup>Required</sup> <a name="AuthorizedEmail" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedEmail"></a>

```go
func AuthorizedEmail() *string
```

- *Type:* *string

---

##### `AuthorizedUserFirstName`<sup>Required</sup> <a name="AuthorizedUserFirstName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserFirstName"></a>

```go
func AuthorizedUserFirstName() *string
```

- *Type:* *string

---

##### `AuthorizedUserLastName`<sup>Required</sup> <a name="AuthorizedUserLastName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedUserLastName"></a>

```go
func AuthorizedUserLastName() *string
```

- *Type:* *string

---

##### `CopyProtectionEnabled`<sup>Required</sup> <a name="CopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.copyProtectionEnabled"></a>

```go
func CopyProtectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EncryptionAtRestEnabled`<sup>Required</sup> <a name="EncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```go
func EncryptionAtRestEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OnDemandPolicyItem`<sup>Required</sup> <a name="OnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItem"></a>

```go
func OnDemandPolicyItem() DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList</a>

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.pitEnabled"></a>

```go
func PitEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PolicyItemDaily`<sup>Required</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDaily"></a>

```go
func PolicyItemDaily() DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList">DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList</a>

---

##### `PolicyItemHourly`<sup>Required</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourly"></a>

```go
func PolicyItemHourly() DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList</a>

---

##### `PolicyItemMonthly`<sup>Required</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthly"></a>

```go
func PolicyItemMonthly() DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `PolicyItemWeekly`<sup>Required</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeekly"></a>

```go
func PolicyItemWeekly() DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList">DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `PolicyItemYearly`<sup>Required</sup> <a name="PolicyItemYearly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemYearly"></a>

```go
func PolicyItemYearly() DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList</a>

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.restoreWindowDays"></a>

```go
func RestoreWindowDays() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedDate"></a>

```go
func UpdatedDate() *string
```

- *Type:* *string

---

##### `UpdatedUser`<sup>Required</sup> <a name="UpdatedUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedUser"></a>

```go
func UpdatedUser() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasBackupCompliancePolicyConfig <a name="DataMongodbatlasBackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyConfig {
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem {

}
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemDaily <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily {

}
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly {

}
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly {

}
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly {

}
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemYearly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemYearly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

&datamongodbatlasbackupcompliancepolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.get"></a>

```go
func Get(index *f64) DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemDailyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.get"></a>

```go
func Get(index *f64) DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasBackupCompliancePolicyPolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.get"></a>

```go
func Get(index *f64) DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasBackupCompliancePolicyPolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```go
func Get(index *f64) DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```go
func Get(index *f64) DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.get"></a>

```go
func Get(index *f64) DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlasbackupcompliancepolicy"

datamongodbatlasbackupcompliancepolicy.NewDataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly">DataMongodbatlasBackupCompliancePolicyPolicyItemYearly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasBackupCompliancePolicyPolicyItemYearly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemYearly">DataMongodbatlasBackupCompliancePolicyPolicyItemYearly</a>

---



