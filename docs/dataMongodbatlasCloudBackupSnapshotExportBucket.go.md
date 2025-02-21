# `dataMongodbatlasCloudBackupSnapshotExportBucket` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotExportBucket` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotExportBucket <a name="DataMongodbatlasCloudBackupSnapshotExportBucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/data-sources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascloudbackupsnapshotexportbucket"

datamongodbatlascloudbackupsnapshotexportbucket.NewDataMongodbatlasCloudBackupSnapshotExportBucket(scope Construct, id *string, config DataMongodbatlasCloudBackupSnapshotExportBucketConfig) DataMongodbatlasCloudBackupSnapshotExportBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig">DataMongodbatlasCloudBackupSnapshotExportBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig">DataMongodbatlasCloudBackupSnapshotExportBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportBucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascloudbackupsnapshotexportbucket"

datamongodbatlascloudbackupsnapshotexportbucket.DataMongodbatlasCloudBackupSnapshotExportBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascloudbackupsnapshotexportbucket"

datamongodbatlascloudbackupsnapshotexportbucket.DataMongodbatlasCloudBackupSnapshotExportBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascloudbackupsnapshotexportbucket"

datamongodbatlascloudbackupsnapshotexportbucket.DataMongodbatlasCloudBackupSnapshotExportBucket_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascloudbackupsnapshotexportbucket"

datamongodbatlascloudbackupsnapshotexportbucket.DataMongodbatlasCloudBackupSnapshotExportBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotExportBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataMongodbatlasCloudBackupSnapshotExportBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/data-sources/cloud_backup_snapshot_export_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotExportBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.iamRoleId">IamRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.serviceUrl">ServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.exportBucketIdInput">ExportBucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.exportBucketId">ExportBucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.iamRoleId"></a>

```go
func IamRoleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.serviceUrl"></a>

```go
func ServiceUrl() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `ExportBucketIdInput`<sup>Optional</sup> <a name="ExportBucketIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.exportBucketIdInput"></a>

```go
func ExportBucketIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ExportBucketId`<sup>Required</sup> <a name="ExportBucketId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.exportBucketId"></a>

```go
func ExportBucketId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotExportBucketConfig <a name="DataMongodbatlasCloudBackupSnapshotExportBucketConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/datamongodbatlascloudbackupsnapshotexportbucket"

&datamongodbatlascloudbackupsnapshotexportbucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExportBucketId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.exportBucketId">ExportBucketId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/data-sources/cloud_backup_snapshot_export_bucket#export_bucket_id DataMongodbatlasCloudBackupSnapshotExportBucket#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/data-sources/cloud_backup_snapshot_export_bucket#project_id DataMongodbatlasCloudBackupSnapshotExportBucket#project_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportBucketId`<sup>Required</sup> <a name="ExportBucketId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.exportBucketId"></a>

```go
ExportBucketId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/data-sources/cloud_backup_snapshot_export_bucket#export_bucket_id DataMongodbatlasCloudBackupSnapshotExportBucket#export_bucket_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportBucket.DataMongodbatlasCloudBackupSnapshotExportBucketConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/data-sources/cloud_backup_snapshot_export_bucket#project_id DataMongodbatlasCloudBackupSnapshotExportBucket#project_id}.

---



