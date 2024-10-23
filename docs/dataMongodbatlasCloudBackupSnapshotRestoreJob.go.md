# `dataMongodbatlasCloudBackupSnapshotRestoreJob` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJob <a name="DataMongodbatlasCloudBackupSnapshotRestoreJob" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job mongodbatlas_cloud_backup_snapshot_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascloudbackupsnapshotrestorejob"

datamongodbatlascloudbackupsnapshotrestorejob.NewDataMongodbatlasCloudBackupSnapshotRestoreJob(scope Construct, id *string, config DataMongodbatlasCloudBackupSnapshotRestoreJobConfig) DataMongodbatlasCloudBackupSnapshotRestoreJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig">DataMongodbatlasCloudBackupSnapshotRestoreJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig">DataMongodbatlasCloudBackupSnapshotRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotRestoreJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascloudbackupsnapshotrestorejob"

datamongodbatlascloudbackupsnapshotrestorejob.DataMongodbatlasCloudBackupSnapshotRestoreJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascloudbackupsnapshotrestorejob"

datamongodbatlascloudbackupsnapshotrestorejob.DataMongodbatlasCloudBackupSnapshotRestoreJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascloudbackupsnapshotrestorejob"

datamongodbatlascloudbackupsnapshotrestorejob.DataMongodbatlasCloudBackupSnapshotRestoreJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascloudbackupsnapshotrestorejob"

datamongodbatlascloudbackupsnapshotrestorejob.DataMongodbatlasCloudBackupSnapshotRestoreJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotRestoreJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotRestoreJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasCloudBackupSnapshotRestoreJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotRestoreJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.cancelled">Cancelled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.deliveryType">DeliveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.deliveryUrl">DeliveryUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.expired">Expired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.oplogInc">OplogInc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.oplogTs">OplogTs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.targetClusterName">TargetClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.targetProjectId">TargetProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.snapshotRestoreJobIdInput">SnapshotRestoreJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId">SnapshotRestoreJobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.cancelled"></a>

```go
func Cancelled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.deliveryType"></a>

```go
func DeliveryType() *string
```

- *Type:* *string

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.deliveryUrl"></a>

```go
func DeliveryUrl() *[]*string
```

- *Type:* *[]*string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.expired"></a>

```go
func Expired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.oplogInc"></a>

```go
func OplogInc() *f64
```

- *Type:* *f64

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.oplogTs"></a>

```go
func OplogTs() *f64
```

- *Type:* *f64

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.pointInTimeUtcSeconds"></a>

```go
func PointInTimeUtcSeconds() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.targetClusterName"></a>

```go
func TargetClusterName() *string
```

- *Type:* *string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.targetProjectId"></a>

```go
func TargetProjectId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SnapshotRestoreJobIdInput`<sup>Optional</sup> <a name="SnapshotRestoreJobIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.snapshotRestoreJobIdInput"></a>

```go
func SnapshotRestoreJobIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SnapshotRestoreJobId`<sup>Required</sup> <a name="SnapshotRestoreJobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.snapshotRestoreJobId"></a>

```go
func SnapshotRestoreJobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotRestoreJobConfig <a name="DataMongodbatlasCloudBackupSnapshotRestoreJobConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v7/datamongodbatlascloudbackupsnapshotrestorejob"

&datamongodbatlascloudbackupsnapshotrestorejob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ProjectId: *string,
	SnapshotRestoreJobId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#project_id DataMongodbatlasCloudBackupSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.snapshotRestoreJobId">SnapshotRestoreJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#snapshot_restore_job_id DataMongodbatlasCloudBackupSnapshotRestoreJob#snapshot_restore_job_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#id DataMongodbatlasCloudBackupSnapshotRestoreJob#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#cluster_name DataMongodbatlasCloudBackupSnapshotRestoreJob#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#project_id DataMongodbatlasCloudBackupSnapshotRestoreJob#project_id}.

---

##### `SnapshotRestoreJobId`<sup>Required</sup> <a name="SnapshotRestoreJobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.snapshotRestoreJobId"></a>

```go
SnapshotRestoreJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#snapshot_restore_job_id DataMongodbatlasCloudBackupSnapshotRestoreJob#snapshot_restore_job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotRestoreJob.DataMongodbatlasCloudBackupSnapshotRestoreJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_restore_job#id DataMongodbatlasCloudBackupSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



