# `mongodbatlas_cloud_provider_snapshot_restore_job`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_snapshot_restore_job`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job).

# `cloudProviderSnapshotRestoreJob` Submodule <a name="`cloudProviderSnapshotRestoreJob` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderSnapshotRestoreJob <a name="CloudProviderSnapshotRestoreJob" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job mongodbatlas_cloud_provider_snapshot_restore_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

cloudprovidersnapshotrestorejob.NewCloudProviderSnapshotRestoreJob(scope Construct, id *string, config CloudProviderSnapshotRestoreJobConfig) CloudProviderSnapshotRestoreJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig">CloudProviderSnapshotRestoreJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig">CloudProviderSnapshotRestoreJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.putDeliveryTypeConfig">PutDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetDeliveryType">ResetDeliveryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetDeliveryTypeConfig">ResetDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDeliveryTypeConfig` <a name="PutDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.putDeliveryTypeConfig"></a>

```go
func PutDeliveryTypeConfig(value CloudProviderSnapshotRestoreJobDeliveryTypeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.putDeliveryTypeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `ResetDeliveryType` <a name="ResetDeliveryType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetDeliveryType"></a>

```go
func ResetDeliveryType()
```

##### `ResetDeliveryTypeConfig` <a name="ResetDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetDeliveryTypeConfig"></a>

```go
func ResetDeliveryTypeConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

cloudprovidersnapshotrestorejob.CloudProviderSnapshotRestoreJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

cloudprovidersnapshotrestorejob.CloudProviderSnapshotRestoreJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

cloudprovidersnapshotrestorejob.CloudProviderSnapshotRestoreJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.cancelled">Cancelled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryTypeConfig">DeliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryUrl">DeliveryUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.expired">Expired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.snapshotRestoreJobId">SnapshotRestoreJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryTypeConfigInput">DeliveryTypeConfigInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryTypeInput">DeliveryTypeInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryType">DeliveryType</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cancelled`<sup>Required</sup> <a name="Cancelled" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.cancelled"></a>

```go
func Cancelled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeliveryTypeConfig`<sup>Required</sup> <a name="DeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryTypeConfig"></a>

```go
func DeliveryTypeConfig() CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference">CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference</a>

---

##### `DeliveryUrl`<sup>Required</sup> <a name="DeliveryUrl" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryUrl"></a>

```go
func DeliveryUrl() *[]*string
```

- *Type:* *[]*string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.expired"></a>

```go
func Expired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `SnapshotRestoreJobId`<sup>Required</sup> <a name="SnapshotRestoreJobId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.snapshotRestoreJobId"></a>

```go
func SnapshotRestoreJobId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DeliveryTypeConfigInput`<sup>Optional</sup> <a name="DeliveryTypeConfigInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryTypeConfigInput"></a>

```go
func DeliveryTypeConfigInput() CloudProviderSnapshotRestoreJobDeliveryTypeConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a>

---

##### `DeliveryTypeInput`<sup>Optional</sup> <a name="DeliveryTypeInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryTypeInput"></a>

```go
func DeliveryTypeInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DeliveryType`<sup>Required</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.deliveryType"></a>

```go
func DeliveryType() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderSnapshotRestoreJobConfig <a name="CloudProviderSnapshotRestoreJobConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

&cloudprovidersnapshotrestorejob.CloudProviderSnapshotRestoreJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ProjectId: *string,
	SnapshotId: *string,
	DeliveryType: *map[string]*string,
	DeliveryTypeConfig: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#cluster_name CloudProviderSnapshotRestoreJob#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#project_id CloudProviderSnapshotRestoreJob#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#snapshot_id CloudProviderSnapshotRestoreJob#snapshot_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.deliveryType">DeliveryType</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#delivery_type CloudProviderSnapshotRestoreJob#delivery_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.deliveryTypeConfig">DeliveryTypeConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a></code> | delivery_type_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#id CloudProviderSnapshotRestoreJob#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#cluster_name CloudProviderSnapshotRestoreJob#cluster_name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#project_id CloudProviderSnapshotRestoreJob#project_id}.

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#snapshot_id CloudProviderSnapshotRestoreJob#snapshot_id}.

---

##### `DeliveryType`<sup>Optional</sup> <a name="DeliveryType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.deliveryType"></a>

```go
DeliveryType *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#delivery_type CloudProviderSnapshotRestoreJob#delivery_type}.

---

##### `DeliveryTypeConfig`<sup>Optional</sup> <a name="DeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.deliveryTypeConfig"></a>

```go
DeliveryTypeConfig CloudProviderSnapshotRestoreJobDeliveryTypeConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a>

delivery_type_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#delivery_type_config CloudProviderSnapshotRestoreJob#delivery_type_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#id CloudProviderSnapshotRestoreJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudProviderSnapshotRestoreJobDeliveryTypeConfig <a name="CloudProviderSnapshotRestoreJobDeliveryTypeConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

&cloudprovidersnapshotrestorejob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig {
	Automated: interface{},
	Download: interface{},
	OplogInc: *f64,
	OplogTs: *f64,
	PointInTime: interface{},
	PointInTimeUtcSeconds: *f64,
	TargetClusterName: *string,
	TargetProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.automated">Automated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#automated CloudProviderSnapshotRestoreJob#automated}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.download">Download</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#download CloudProviderSnapshotRestoreJob#download}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc">OplogInc</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#oplog_inc CloudProviderSnapshotRestoreJob#oplog_inc}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs">OplogTs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#oplog_ts CloudProviderSnapshotRestoreJob#oplog_ts}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime">PointInTime</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#point_in_time CloudProviderSnapshotRestoreJob#point_in_time}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#point_in_time_utc_seconds CloudProviderSnapshotRestoreJob#point_in_time_utc_seconds}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName">TargetClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#target_cluster_name CloudProviderSnapshotRestoreJob#target_cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId">TargetProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#target_project_id CloudProviderSnapshotRestoreJob#target_project_id}. |

---

##### `Automated`<sup>Optional</sup> <a name="Automated" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.automated"></a>

```go
Automated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#automated CloudProviderSnapshotRestoreJob#automated}.

---

##### `Download`<sup>Optional</sup> <a name="Download" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.download"></a>

```go
Download interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#download CloudProviderSnapshotRestoreJob#download}.

---

##### `OplogInc`<sup>Optional</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.oplogInc"></a>

```go
OplogInc *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#oplog_inc CloudProviderSnapshotRestoreJob#oplog_inc}.

---

##### `OplogTs`<sup>Optional</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.oplogTs"></a>

```go
OplogTs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#oplog_ts CloudProviderSnapshotRestoreJob#oplog_ts}.

---

##### `PointInTime`<sup>Optional</sup> <a name="PointInTime" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.pointInTime"></a>

```go
PointInTime interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#point_in_time CloudProviderSnapshotRestoreJob#point_in_time}.

---

##### `PointInTimeUtcSeconds`<sup>Optional</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.pointInTimeUtcSeconds"></a>

```go
PointInTimeUtcSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#point_in_time_utc_seconds CloudProviderSnapshotRestoreJob#point_in_time_utc_seconds}.

---

##### `TargetClusterName`<sup>Optional</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.targetClusterName"></a>

```go
TargetClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#target_cluster_name CloudProviderSnapshotRestoreJob#target_cluster_name}.

---

##### `TargetProjectId`<sup>Optional</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig.property.targetProjectId"></a>

```go
TargetProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_restore_job#target_project_id CloudProviderSnapshotRestoreJob#target_project_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference <a name="CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/cloudprovidersnapshotrestorejob"

cloudprovidersnapshotrestorejob.NewCloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated">ResetAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload">ResetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc">ResetOplogInc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs">ResetOplogTs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime">ResetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds">ResetPointInTimeUtcSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName">ResetTargetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId">ResetTargetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomated` <a name="ResetAutomated" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetAutomated"></a>

```go
func ResetAutomated()
```

##### `ResetDownload` <a name="ResetDownload" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetDownload"></a>

```go
func ResetDownload()
```

##### `ResetOplogInc` <a name="ResetOplogInc" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogInc"></a>

```go
func ResetOplogInc()
```

##### `ResetOplogTs` <a name="ResetOplogTs" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetOplogTs"></a>

```go
func ResetOplogTs()
```

##### `ResetPointInTime` <a name="ResetPointInTime" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTime"></a>

```go
func ResetPointInTime()
```

##### `ResetPointInTimeUtcSeconds` <a name="ResetPointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetPointInTimeUtcSeconds"></a>

```go
func ResetPointInTimeUtcSeconds()
```

##### `ResetTargetClusterName` <a name="ResetTargetClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetClusterName"></a>

```go
func ResetTargetClusterName()
```

##### `ResetTargetProjectId` <a name="ResetTargetProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.resetTargetProjectId"></a>

```go
func ResetTargetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput">AutomatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput">DownloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput">OplogIncInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput">OplogTsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput">PointInTimeUtcSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput">TargetClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput">TargetProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated">Automated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download">Download</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc">OplogInc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs">OplogTs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime">PointInTime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds">PointInTimeUtcSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName">TargetClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId">TargetProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomatedInput`<sup>Optional</sup> <a name="AutomatedInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automatedInput"></a>

```go
func AutomatedInput() interface{}
```

- *Type:* interface{}

---

##### `DownloadInput`<sup>Optional</sup> <a name="DownloadInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.downloadInput"></a>

```go
func DownloadInput() interface{}
```

- *Type:* interface{}

---

##### `OplogIncInput`<sup>Optional</sup> <a name="OplogIncInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogIncInput"></a>

```go
func OplogIncInput() *f64
```

- *Type:* *f64

---

##### `OplogTsInput`<sup>Optional</sup> <a name="OplogTsInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTsInput"></a>

```go
func OplogTsInput() *f64
```

- *Type:* *f64

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeInput"></a>

```go
func PointInTimeInput() interface{}
```

- *Type:* interface{}

---

##### `PointInTimeUtcSecondsInput`<sup>Optional</sup> <a name="PointInTimeUtcSecondsInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSecondsInput"></a>

```go
func PointInTimeUtcSecondsInput() *f64
```

- *Type:* *f64

---

##### `TargetClusterNameInput`<sup>Optional</sup> <a name="TargetClusterNameInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterNameInput"></a>

```go
func TargetClusterNameInput() *string
```

- *Type:* *string

---

##### `TargetProjectIdInput`<sup>Optional</sup> <a name="TargetProjectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectIdInput"></a>

```go
func TargetProjectIdInput() *string
```

- *Type:* *string

---

##### `Automated`<sup>Required</sup> <a name="Automated" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.automated"></a>

```go
func Automated() interface{}
```

- *Type:* interface{}

---

##### `Download`<sup>Required</sup> <a name="Download" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.download"></a>

```go
func Download() interface{}
```

- *Type:* interface{}

---

##### `OplogInc`<sup>Required</sup> <a name="OplogInc" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogInc"></a>

```go
func OplogInc() *f64
```

- *Type:* *f64

---

##### `OplogTs`<sup>Required</sup> <a name="OplogTs" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.oplogTs"></a>

```go
func OplogTs() *f64
```

- *Type:* *f64

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTime"></a>

```go
func PointInTime() interface{}
```

- *Type:* interface{}

---

##### `PointInTimeUtcSeconds`<sup>Required</sup> <a name="PointInTimeUtcSeconds" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.pointInTimeUtcSeconds"></a>

```go
func PointInTimeUtcSeconds() *f64
```

- *Type:* *f64

---

##### `TargetClusterName`<sup>Required</sup> <a name="TargetClusterName" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetClusterName"></a>

```go
func TargetClusterName() *string
```

- *Type:* *string

---

##### `TargetProjectId`<sup>Required</sup> <a name="TargetProjectId" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.targetProjectId"></a>

```go
func TargetProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudProviderSnapshotRestoreJobDeliveryTypeConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotRestoreJob.CloudProviderSnapshotRestoreJobDeliveryTypeConfig">CloudProviderSnapshotRestoreJobDeliveryTypeConfig</a>

---



