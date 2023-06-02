# `data_mongodbatlas_cloud_provider_snapshot_restore_jobs`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_provider_snapshot_restore_jobs`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs).

# `dataMongodbatlasCloudProviderSnapshotRestoreJobs` Submodule <a name="`dataMongodbatlasCloudProviderSnapshotRestoreJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobs <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs mongodbatlas_cloud_provider_snapshot_restore_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

datamongodbatlascloudprovidersnapshotrestorejobs.NewDataMongodbatlasCloudProviderSnapshotRestoreJobs(scope Construct, id *string, config DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig) DataMongodbatlasCloudProviderSnapshotRestoreJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig">DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig">DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetId"></a>

```go
func ResetId()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetPageNum"></a>

```go
func ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

datamongodbatlascloudprovidersnapshotrestorejobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

datamongodbatlascloudprovidersnapshotrestorejobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

datamongodbatlascloudprovidersnapshotrestorejobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList">DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.totalCount">TotalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.results"></a>

```go
func Results() DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList">DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.totalCount"></a>

```go
func TotalCount() *f64
```

- *Type:* *f64

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

&datamongodbatlascloudprovidersnapshotrestorejobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ProjectId: *string,
	Id: *string,
	ItemsPerPage: *f64,
	PageNum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#project_id DataMongodbatlasCloudProviderSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#id DataMongodbatlasCloudProviderSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudProviderSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#page_num DataMongodbatlasCloudProviderSnapshotRestoreJobs#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJobs#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#project_id DataMongodbatlasCloudProviderSnapshotRestoreJobs#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#id DataMongodbatlasCloudProviderSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudProviderSnapshotRestoreJobs#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/cloud_provider_snapshot_restore_jobs#page_num DataMongodbatlasCloudProviderSnapshotRestoreJobs#page_num}.

---

### DataMongodbatlasCloudProviderSnapshotRestoreJobsResults <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

&datamongodbatlascloudprovidersnapshotrestorejobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

datamongodbatlascloudprovidersnapshotrestorejobs.NewDataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejobs"

datamongodbatlascloudprovidersnapshotrestorejobs.NewDataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.cancelled">Cancelled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryType">DeliveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl">DeliveryUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expired">Expired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogInc">OplogInc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogTs">OplogTs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetClusterName">TargetClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetProjectId">TargetProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults">DataMongodbatlasCloudProviderSnapshotRestoreJobsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.cancelled"></a>

```go
func Cancelled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryType"></a>

```go
func DeliveryType() *string
```

- *Type:* *string

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl"></a>

```go
func DeliveryUrl() *[]*string
```

- *Type:* *[]*string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expired"></a>

```go
func Expired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogInc"></a>

```go
func OplogInc() *f64
```

- *Type:* *f64

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogTs"></a>

```go
func OplogTs() *f64
```

- *Type:* *f64

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds"></a>

```go
func PointInTimeUtcSeconds() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetClusterName"></a>

```go
func TargetClusterName() *string
```

- *Type:* *string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetProjectId"></a>

```go
func TargetProjectId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCloudProviderSnapshotRestoreJobsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults">DataMongodbatlasCloudProviderSnapshotRestoreJobsResults</a>

---



