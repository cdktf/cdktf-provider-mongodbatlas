# `mongodbatlas_backup_compliance_policy`

Refer to the Terraform Registory for docs: [`mongodbatlas_backup_compliance_policy`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy).

# `backupCompliancePolicy` Submodule <a name="`backupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupCompliancePolicy <a name="BackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicy(scope Construct, id *string, config BackupCompliancePolicyConfig) BackupCompliancePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig">BackupCompliancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig">BackupCompliancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem">PutOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily">PutPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly">PutPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly">PutPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly">PutPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily">ResetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly">ResetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly">ResetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly">ResetPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays">ResetRestoreWindowDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOnDemandPolicyItem` <a name="PutOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem"></a>

```go
func PutOnDemandPolicyItem(value BackupCompliancePolicyOnDemandPolicyItem)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `PutPolicyItemDaily` <a name="PutPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily"></a>

```go
func PutPolicyItemDaily(value BackupCompliancePolicyPolicyItemDaily)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `PutPolicyItemHourly` <a name="PutPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly"></a>

```go
func PutPolicyItemHourly(value BackupCompliancePolicyPolicyItemHourly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `PutPolicyItemMonthly` <a name="PutPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly"></a>

```go
func PutPolicyItemMonthly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPolicyItemWeekly` <a name="PutPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly"></a>

```go
func PutPolicyItemWeekly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyItemDaily` <a name="ResetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily"></a>

```go
func ResetPolicyItemDaily()
```

##### `ResetPolicyItemHourly` <a name="ResetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly"></a>

```go
func ResetPolicyItemHourly()
```

##### `ResetPolicyItemMonthly` <a name="ResetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly"></a>

```go
func ResetPolicyItemMonthly()
```

##### `ResetPolicyItemWeekly` <a name="ResetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly"></a>

```go
func ResetPolicyItemWeekly()
```

##### `ResetRestoreWindowDays` <a name="ResetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays"></a>

```go
func ResetRestoreWindowDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.BackupCompliancePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.BackupCompliancePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.BackupCompliancePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem">OnDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate">UpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser">UpdatedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput">AuthorizedEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput">CopyProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput">EncryptionAtRestEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput">OnDemandPolicyItemInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput">PitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput">PolicyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput">PolicyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput">PolicyItemMonthlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput">PolicyItemWeeklyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput">RestoreWindowDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail">AuthorizedEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled">CopyProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled">EncryptionAtRestEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled">PitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnDemandPolicyItem`<sup>Required</sup> <a name="OnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem"></a>

```go
func OnDemandPolicyItem() BackupCompliancePolicyOnDemandPolicyItemOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a>

---

##### `PolicyItemDaily`<sup>Required</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily"></a>

```go
func PolicyItemDaily() BackupCompliancePolicyPolicyItemDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a>

---

##### `PolicyItemHourly`<sup>Required</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly"></a>

```go
func PolicyItemHourly() BackupCompliancePolicyPolicyItemHourlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a>

---

##### `PolicyItemMonthly`<sup>Required</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly"></a>

```go
func PolicyItemMonthly() BackupCompliancePolicyPolicyItemMonthlyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `PolicyItemWeekly`<sup>Required</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly"></a>

```go
func PolicyItemWeekly() BackupCompliancePolicyPolicyItemWeeklyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate"></a>

```go
func UpdatedDate() *string
```

- *Type:* *string

---

##### `UpdatedUser`<sup>Required</sup> <a name="UpdatedUser" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser"></a>

```go
func UpdatedUser() *string
```

- *Type:* *string

---

##### `AuthorizedEmailInput`<sup>Optional</sup> <a name="AuthorizedEmailInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput"></a>

```go
func AuthorizedEmailInput() *string
```

- *Type:* *string

---

##### `CopyProtectionEnabledInput`<sup>Optional</sup> <a name="CopyProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput"></a>

```go
func CopyProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionAtRestEnabledInput`<sup>Optional</sup> <a name="EncryptionAtRestEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput"></a>

```go
func EncryptionAtRestEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnDemandPolicyItemInput`<sup>Optional</sup> <a name="OnDemandPolicyItemInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput"></a>

```go
func OnDemandPolicyItemInput() BackupCompliancePolicyOnDemandPolicyItem
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `PitEnabledInput`<sup>Optional</sup> <a name="PitEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput"></a>

```go
func PitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyItemDailyInput`<sup>Optional</sup> <a name="PolicyItemDailyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput"></a>

```go
func PolicyItemDailyInput() BackupCompliancePolicyPolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `PolicyItemHourlyInput`<sup>Optional</sup> <a name="PolicyItemHourlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput"></a>

```go
func PolicyItemHourlyInput() BackupCompliancePolicyPolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `PolicyItemMonthlyInput`<sup>Optional</sup> <a name="PolicyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput"></a>

```go
func PolicyItemMonthlyInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyItemWeeklyInput`<sup>Optional</sup> <a name="PolicyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput"></a>

```go
func PolicyItemWeeklyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RestoreWindowDaysInput`<sup>Optional</sup> <a name="RestoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput"></a>

```go
func RestoreWindowDaysInput() *f64
```

- *Type:* *f64

---

##### `AuthorizedEmail`<sup>Required</sup> <a name="AuthorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail"></a>

```go
func AuthorizedEmail() *string
```

- *Type:* *string

---

##### `CopyProtectionEnabled`<sup>Required</sup> <a name="CopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled"></a>

```go
func CopyProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `EncryptionAtRestEnabled`<sup>Required</sup> <a name="EncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```go
func EncryptionAtRestEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled"></a>

```go
func PitEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays"></a>

```go
func RestoreWindowDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupCompliancePolicyConfig <a name="BackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

&backupcompliancepolicy.BackupCompliancePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizedEmail: *string,
	CopyProtectionEnabled: interface{},
	EncryptionAtRestEnabled: interface{},
	OnDemandPolicyItem: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem,
	PitEnabled: interface{},
	ProjectId: *string,
	Id: *string,
	PolicyItemDaily: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily,
	PolicyItemHourly: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly,
	PolicyItemMonthly: interface{},
	PolicyItemWeekly: interface{},
	RestoreWindowDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail">AuthorizedEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled">CopyProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled">EncryptionAtRestEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem">OnDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | on_demand_policy_item block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled">PitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily">PolicyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly">PolicyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly">PolicyItemMonthly</a></code> | <code>interface{}</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly">PolicyItemWeekly</a></code> | <code>interface{}</code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedEmail`<sup>Required</sup> <a name="AuthorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail"></a>

```go
AuthorizedEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}.

---

##### `CopyProtectionEnabled`<sup>Required</sup> <a name="CopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled"></a>

```go
CopyProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}.

---

##### `EncryptionAtRestEnabled`<sup>Required</sup> <a name="EncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled"></a>

```go
EncryptionAtRestEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}.

---

##### `OnDemandPolicyItem`<sup>Required</sup> <a name="OnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem"></a>

```go
OnDemandPolicyItem BackupCompliancePolicyOnDemandPolicyItem
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

on_demand_policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#on_demand_policy_item BackupCompliancePolicy#on_demand_policy_item}

---

##### `PitEnabled`<sup>Required</sup> <a name="PitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled"></a>

```go
PitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyItemDaily`<sup>Optional</sup> <a name="PolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily"></a>

```go
PolicyItemDaily BackupCompliancePolicyPolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#policy_item_daily BackupCompliancePolicy#policy_item_daily}

---

##### `PolicyItemHourly`<sup>Optional</sup> <a name="PolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly"></a>

```go
PolicyItemHourly BackupCompliancePolicyPolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#policy_item_hourly BackupCompliancePolicy#policy_item_hourly}

---

##### `PolicyItemMonthly`<sup>Optional</sup> <a name="PolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly"></a>

```go
PolicyItemMonthly interface{}
```

- *Type:* interface{}

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#policy_item_monthly BackupCompliancePolicy#policy_item_monthly}

---

##### `PolicyItemWeekly`<sup>Optional</sup> <a name="PolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly"></a>

```go
PolicyItemWeekly interface{}
```

- *Type:* interface{}

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#policy_item_weekly BackupCompliancePolicy#policy_item_weekly}

---

##### `RestoreWindowDays`<sup>Optional</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays"></a>

```go
RestoreWindowDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}.

---

### BackupCompliancePolicyOnDemandPolicyItem <a name="BackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

&backupcompliancepolicy.BackupCompliancePolicyOnDemandPolicyItem {
	FrequencyInterval: *f64,
	RetentionUnit: *string,
	RetentionValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval"></a>

```go
FrequencyInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit"></a>

```go
RetentionUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue"></a>

```go
RetentionValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemDaily <a name="BackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

&backupcompliancepolicy.BackupCompliancePolicyPolicyItemDaily {
	FrequencyInterval: *f64,
	RetentionUnit: *string,
	RetentionValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval"></a>

```go
FrequencyInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit"></a>

```go
RetentionUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue"></a>

```go
RetentionValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemHourly <a name="BackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

&backupcompliancepolicy.BackupCompliancePolicyPolicyItemHourly {
	FrequencyInterval: *f64,
	RetentionUnit: *string,
	RetentionValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval"></a>

```go
FrequencyInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit"></a>

```go
RetentionUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue"></a>

```go
RetentionValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemMonthly <a name="BackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

&backupcompliancepolicy.BackupCompliancePolicyPolicyItemMonthly {
	FrequencyInterval: *f64,
	RetentionUnit: *string,
	RetentionValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval"></a>

```go
FrequencyInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit"></a>

```go
RetentionUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue"></a>

```go
RetentionValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemWeekly <a name="BackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

&backupcompliancepolicy.BackupCompliancePolicyPolicyItemWeekly {
	FrequencyInterval: *f64,
	RetentionUnit: *string,
	RetentionValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval"></a>

```go
FrequencyInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit"></a>

```go
RetentionUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue"></a>

```go
RetentionValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="BackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyOnDemandPolicyItemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupCompliancePolicyOnDemandPolicyItemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```go
func FrequencyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput"></a>

```go
func RetentionUnitInput() *string
```

- *Type:* *string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput"></a>

```go
func RetentionValueInput() *f64
```

- *Type:* *f64

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupCompliancePolicyOnDemandPolicyItem
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---


### BackupCompliancePolicyPolicyItemDailyOutputReference <a name="BackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyPolicyItemDailyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupCompliancePolicyPolicyItemDailyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```go
func FrequencyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```go
func RetentionUnitInput() *string
```

- *Type:* *string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput"></a>

```go
func RetentionValueInput() *f64
```

- *Type:* *f64

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupCompliancePolicyPolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---


### BackupCompliancePolicyPolicyItemHourlyOutputReference <a name="BackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyPolicyItemHourlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupCompliancePolicyPolicyItemHourlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```go
func FrequencyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```go
func RetentionUnitInput() *string
```

- *Type:* *string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```go
func RetentionValueInput() *f64
```

- *Type:* *f64

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupCompliancePolicyPolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---


### BackupCompliancePolicyPolicyItemMonthlyList <a name="BackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyPolicyItemMonthlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupCompliancePolicyPolicyItemMonthlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```go
func Get(index *f64) BackupCompliancePolicyPolicyItemMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="BackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyPolicyItemMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupCompliancePolicyPolicyItemMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```go
func FrequencyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```go
func RetentionUnitInput() *string
```

- *Type:* *string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```go
func RetentionValueInput() *f64
```

- *Type:* *f64

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupCompliancePolicyPolicyItemWeeklyList <a name="BackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyPolicyItemWeeklyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupCompliancePolicyPolicyItemWeeklyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```go
func Get(index *f64) BackupCompliancePolicyPolicyItemWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="BackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v4/backupcompliancepolicy"

backupcompliancepolicy.NewBackupCompliancePolicyPolicyItemWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupCompliancePolicyPolicyItemWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput">FrequencyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput">RetentionValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FrequencyIntervalInput`<sup>Optional</sup> <a name="FrequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```go
func FrequencyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```go
func RetentionUnitInput() *string
```

- *Type:* *string

---

##### `RetentionValueInput`<sup>Optional</sup> <a name="RetentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```go
func RetentionValueInput() *f64
```

- *Type:* *f64

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



