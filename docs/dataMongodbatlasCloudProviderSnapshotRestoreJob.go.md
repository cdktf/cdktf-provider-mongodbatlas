# `data_mongodbatlas_cloud_provider_snapshot_restore_job`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_cloud_provider_snapshot_restore_job`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job).

# `dataMongodbatlasCloudProviderSnapshotRestoreJob` Submodule <a name="`dataMongodbatlasCloudProviderSnapshotRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJob <a name="DataMongodbatlasCloudProviderSnapshotRestoreJob" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job mongodbatlas_cloud_provider_snapshot_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejob"

datamongodbatlascloudprovidersnapshotrestorejob.NewDataMongodbatlasCloudProviderSnapshotRestoreJob(scope Construct, id *string, config DataMongodbatlasCloudProviderSnapshotRestoreJobConfig) DataMongodbatlasCloudProviderSnapshotRestoreJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig">DataMongodbatlasCloudProviderSnapshotRestoreJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig">DataMongodbatlasCloudProviderSnapshotRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejob"

datamongodbatlascloudprovidersnapshotrestorejob.DataMongodbatlasCloudProviderSnapshotRestoreJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejob"

datamongodbatlascloudprovidersnapshotrestorejob.DataMongodbatlasCloudProviderSnapshotRestoreJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejob"

datamongodbatlascloudprovidersnapshotrestorejob.DataMongodbatlasCloudProviderSnapshotRestoreJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.cancelled">Cancelled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.deliveryType">DeliveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.deliveryUrl">DeliveryUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.expired">Expired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.oplogInc">OplogInc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.oplogTs">OplogTs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.targetClusterName">TargetClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.targetProjectId">TargetProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.cancelled"></a>

```go
func Cancelled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.deliveryType"></a>

```go
func DeliveryType() *string
```

- *Type:* *string

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.deliveryUrl"></a>

```go
func DeliveryUrl() *[]*string
```

- *Type:* *[]*string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.expired"></a>

```go
func Expired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.oplogInc"></a>

```go
func OplogInc() *f64
```

- *Type:* *f64

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.oplogTs"></a>

```go
func OplogTs() *f64
```

- *Type:* *f64

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.pointInTimeUtcSeconds"></a>

```go
func PointInTimeUtcSeconds() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.targetClusterName"></a>

```go
func TargetClusterName() *string
```

- *Type:* *string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.targetProjectId"></a>

```go
func TargetProjectId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobConfig <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/datamongodbatlascloudprovidersnapshotrestorejob"

&datamongodbatlascloudprovidersnapshotrestorejob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	JobId: *string,
	ProjectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.jobId">JobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#job_id DataMongodbatlasCloudProviderSnapshotRestoreJob#job_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#project_id DataMongodbatlasCloudProviderSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#id DataMongodbatlasCloudProviderSnapshotRestoreJob#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJob#cluster_name}.

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#job_id DataMongodbatlasCloudProviderSnapshotRestoreJob#job_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#project_id DataMongodbatlasCloudProviderSnapshotRestoreJob#project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJob.DataMongodbatlasCloudProviderSnapshotRestoreJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/cloud_provider_snapshot_restore_job#id DataMongodbatlasCloudProviderSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



