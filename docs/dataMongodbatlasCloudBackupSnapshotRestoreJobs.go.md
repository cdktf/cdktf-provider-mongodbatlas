# `data_mongodbatlas_cloud_backup_snapshot_restore_jobs`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_backup_snapshot_restore_jobs`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs).

# `dataMongodbatlasCloudBackupSnapshotRestoreJobs` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotRestoreJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobs <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs mongodbatlas_cloud_backup_snapshot_restore_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

datamongodbatlascloudbackupsnapshotrestorejobs.NewDataMongodbatlasCloudBackupSnapshotRestoreJobs(scope Construct, id *string, config DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig) DataMongodbatlasCloudBackupSnapshotRestoreJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig">DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig">DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetItemsPerPage">ResetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetPageNum">ResetPageNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetId"></a>

```go
func ResetId()
```

##### `ResetItemsPerPage` <a name="ResetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetItemsPerPage"></a>

```go
func ResetItemsPerPage()
```

##### `ResetPageNum` <a name="ResetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.resetPageNum"></a>

```go
func ResetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

datamongodbatlascloudbackupsnapshotrestorejobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

datamongodbatlascloudbackupsnapshotrestorejobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

datamongodbatlascloudbackupsnapshotrestorejobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.results">Results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList">DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.totalCount">TotalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPageInput">ItemsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNumInput">PageNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNum">PageNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.results"></a>

```go
func Results() DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList">DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList</a>

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.totalCount"></a>

```go
func TotalCount() *f64
```

- *Type:* *f64

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsPerPageInput`<sup>Optional</sup> <a name="ItemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPageInput"></a>

```go
func ItemsPerPageInput() *f64
```

- *Type:* *f64

---

##### `PageNumInput`<sup>Optional</sup> <a name="PageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNumInput"></a>

```go
func PageNumInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PageNum`<sup>Required</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.pageNum"></a>

```go
func PageNum() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

&datamongodbatlascloudbackupsnapshotrestorejobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig {
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.pageNum">PageNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJobs#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#project_id DataMongodbatlasCloudBackupSnapshotRestoreJobs#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#id DataMongodbatlasCloudBackupSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItemsPerPage`<sup>Optional</sup> <a name="ItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.itemsPerPage"></a>

```go
ItemsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotRestoreJobs#items_per_page}.

---

##### `PageNum`<sup>Optional</sup> <a name="PageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsConfig.property.pageNum"></a>

```go
PageNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/cloud_backup_snapshot_restore_jobs#page_num DataMongodbatlasCloudBackupSnapshotRestoreJobs#page_num}.

---

### DataMongodbatlasCloudBackupSnapshotRestoreJobsResults <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

&datamongodbatlascloudbackupsnapshotrestorejobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

datamongodbatlascloudbackupsnapshotrestorejobs.NewDataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get"></a>

```go
func Get(index *f64) DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v5/datamongodbatlascloudbackupsnapshotrestorejobs"

datamongodbatlascloudbackupsnapshotrestorejobs.NewDataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.cancelled">Cancelled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryType">DeliveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl">DeliveryUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expired">Expired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogInc">OplogInc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogTs">OplogTs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetClusterName">TargetClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetProjectId">TargetProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults">DataMongodbatlasCloudBackupSnapshotRestoreJobsResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.cancelled"></a>

```go
func Cancelled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryType"></a>

```go
func DeliveryType() *string
```

- *Type:* *string

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl"></a>

```go
func DeliveryUrl() *[]*string
```

- *Type:* *[]*string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expired"></a>

```go
func Expired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogInc"></a>

```go
func OplogInc() *f64
```

- *Type:* *f64

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.oplogTs"></a>

```go
func OplogTs() *f64
```

- *Type:* *f64

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds"></a>

```go
func PointInTimeUtcSeconds() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetClusterName"></a>

```go
func TargetClusterName() *string
```

- *Type:* *string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.targetProjectId"></a>

```go
func TargetProjectId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataMongodbatlasCloudBackupSnapshotRestoreJobsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJobs.DataMongodbatlasCloudBackupSnapshotRestoreJobsResults">DataMongodbatlasCloudBackupSnapshotRestoreJobsResults</a>

---



