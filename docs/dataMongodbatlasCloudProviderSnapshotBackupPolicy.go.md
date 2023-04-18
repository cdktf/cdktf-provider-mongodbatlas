# `data_mongodbatlas_cloud_provider_snapshot_backup_policy`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_provider_snapshot_backup_policy`](https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy).

# `dataMongodbatlasCloudProviderSnapshotBackupPolicy` Submodule <a name="`dataMongodbatlasCloudProviderSnapshotBackupPolicy` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicy <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.NewDataMongodbatlasCloudProviderSnapshotBackupPolicy(scope Construct, id *string, config DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig) DataMongodbatlasCloudProviderSnapshotBackupPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig">DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig">DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.nextSnapshot">NextSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceHourOfDay">ReferenceHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour">ReferenceMinuteOfHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.restoreWindowDays">RestoreWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.updateSnapshots">UpdateSnapshots</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `NextSnapshot`<sup>Required</sup> <a name="NextSnapshot" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.nextSnapshot"></a>

```go
func NextSnapshot() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.policies"></a>

```go
func Policies() DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList</a>

---

##### `ReferenceHourOfDay`<sup>Required</sup> <a name="ReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceHourOfDay"></a>

```go
func ReferenceHourOfDay() *f64
```

- *Type:* *f64

---

##### `ReferenceMinuteOfHour`<sup>Required</sup> <a name="ReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour"></a>

```go
func ReferenceMinuteOfHour() *f64
```

- *Type:* *f64

---

##### `RestoreWindowDays`<sup>Required</sup> <a name="RestoreWindowDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.restoreWindowDays"></a>

```go
func RestoreWindowDays() *f64
```

- *Type:* *f64

---

##### `UpdateSnapshots`<sup>Required</sup> <a name="UpdateSnapshots" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.updateSnapshots"></a>

```go
func UpdateSnapshots() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

&datamongodbatlascloudprovidersnapshotbackuppolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ProjectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#cluster_name DataMongodbatlasCloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#project_id DataMongodbatlasCloudProviderSnapshotBackupPolicy#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_backup_policy#id DataMongodbatlasCloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

&datamongodbatlascloudprovidersnapshotbackuppolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies {

}
```


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

&datamongodbatlascloudprovidersnapshotbackuppolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.NewDataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.NewDataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">PolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies">DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyItem`<sup>Required</sup> <a name="PolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```go
func PolicyItem() DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies">DataMongodbatlasCloudProviderSnapshotBackupPolicyPolicies</a>

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.NewDataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotbackuppolicy"

datamongodbatlascloudprovidersnapshotbackuppolicy.NewDataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">FrequencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">RetentionValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyType`<sup>Required</sup> <a name="FrequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```go
func FrequencyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `RetentionValue`<sup>Required</sup> <a name="RetentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```go
func RetentionValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotBackupPolicy.DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem">DataMongodbatlasCloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>

---



