# `alertConfiguration` Submodule <a name="`alertConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.alertConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertConfiguration <a name="AlertConfiguration" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration mongodbatlas_alert_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfiguration(scope Construct, id *string, config AlertConfigurationConfig) AlertConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig">AlertConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig">AlertConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher">PutMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig">PutMetricThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig">PutThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThresholdConfig">ResetMetricThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThresholdConfig">ResetThresholdConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatcher` <a name="PutMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher"></a>

```go
func PutMatcher(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricThresholdConfig` <a name="PutMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig"></a>

```go
func PutMetricThresholdConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThresholdConfig` <a name="PutThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig"></a>

```go
func PutThresholdConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMatcher"></a>

```go
func ResetMatcher()
```

##### `ResetMetricThresholdConfig` <a name="ResetMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThresholdConfig"></a>

```go
func ResetMetricThresholdConfig()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetThresholdConfig` <a name="ResetThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThresholdConfig"></a>

```go
func ResetThresholdConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.AlertConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.AlertConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.AlertConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.AlertConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlertConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlertConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.alertConfigurationId">AlertConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcher">Matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList">AlertConfigurationMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfig">MetricThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList">AlertConfigurationMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList">AlertConfigurationNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfig">ThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList">AlertConfigurationThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcherInput">MatcherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfigInput">MetricThresholdConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfigInput">ThresholdConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlertConfigurationId`<sup>Required</sup> <a name="AlertConfigurationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.alertConfigurationId"></a>

```go
func AlertConfigurationId() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcher"></a>

```go
func Matcher() AlertConfigurationMatcherList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList">AlertConfigurationMatcherList</a>

---

##### `MetricThresholdConfig`<sup>Required</sup> <a name="MetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfig"></a>

```go
func MetricThresholdConfig() AlertConfigurationMetricThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList">AlertConfigurationMetricThresholdConfigList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notification"></a>

```go
func Notification() AlertConfigurationNotificationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList">AlertConfigurationNotificationList</a>

---

##### `ThresholdConfig`<sup>Required</sup> <a name="ThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfig"></a>

```go
func ThresholdConfig() AlertConfigurationThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList">AlertConfigurationThresholdConfigList</a>

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcherInput"></a>

```go
func MatcherInput() interface{}
```

- *Type:* interface{}

---

##### `MetricThresholdConfigInput`<sup>Optional</sup> <a name="MetricThresholdConfigInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfigInput"></a>

```go
func MetricThresholdConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ThresholdConfigInput`<sup>Optional</sup> <a name="ThresholdConfigInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfigInput"></a>

```go
func ThresholdConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConfigurationConfig <a name="AlertConfigurationConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

&alertconfiguration.AlertConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventType: *string,
	ProjectId: *string,
	Enabled: interface{},
	Matcher: interface{},
	MetricThresholdConfig: interface{},
	Notification: interface{},
	ThresholdConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.matcher">Matcher</a></code> | <code>interface{}</code> | matcher block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThresholdConfig">MetricThresholdConfig</a></code> | <code>interface{}</code> | metric_threshold_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.thresholdConfig">ThresholdConfig</a></code> | <code>interface{}</code> | threshold_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}.

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.matcher"></a>

```go
Matcher interface{}
```

- *Type:* interface{}

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#matcher AlertConfiguration#matcher}

---

##### `MetricThresholdConfig`<sup>Optional</sup> <a name="MetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThresholdConfig"></a>

```go
MetricThresholdConfig interface{}
```

- *Type:* interface{}

metric_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#metric_threshold_config AlertConfiguration#metric_threshold_config}

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#notification AlertConfiguration#notification}

---

##### `ThresholdConfig`<sup>Optional</sup> <a name="ThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.thresholdConfig"></a>

```go
ThresholdConfig interface{}
```

- *Type:* interface{}

threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#threshold_config AlertConfiguration#threshold_config}

---

### AlertConfigurationMatcher <a name="AlertConfigurationMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

&alertconfiguration.AlertConfigurationMatcher {
	FieldName: *string,
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#value AlertConfiguration#value}. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#value AlertConfiguration#value}.

---

### AlertConfigurationMetricThresholdConfig <a name="AlertConfigurationMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

&alertconfiguration.AlertConfigurationMetricThresholdConfig {
	MetricName: *string,
	Mode: *string,
	Operator: *string,
	Threshold: *f64,
	Units: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#mode AlertConfiguration#mode}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#units AlertConfiguration#units}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#mode AlertConfiguration#mode}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

### AlertConfigurationNotification <a name="AlertConfigurationNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

&alertconfiguration.AlertConfigurationNotification {
	TypeName: *string,
	ApiToken: *string,
	ChannelName: *string,
	DatadogApiKey: *string,
	DatadogRegion: *string,
	DelayMin: *f64,
	EmailAddress: *string,
	EmailEnabled: interface{},
	IntegrationId: *string,
	IntervalMin: *f64,
	MicrosoftTeamsWebhookUrl: *string,
	MobileNumber: *string,
	NotifierId: *string,
	OpsGenieApiKey: *string,
	OpsGenieRegion: *string,
	Roles: *[]*string,
	ServiceKey: *string,
	SmsEnabled: interface{},
	TeamId: *string,
	Username: *string,
	VictorOpsApiKey: *string,
	VictorOpsRoutingKey: *string,
	WebhookSecret: *string,
	WebhookUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.apiToken">ApiToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogApiKey">DatadogApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogRegion">DatadogRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.delayMin">DelayMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailEnabled">EmailEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#integration_id AlertConfiguration#integration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.intervalMin">IntervalMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.mobileNumber">MobileNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.notifierId">NotifierId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#notifier_id AlertConfiguration#notifier_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieApiKey">OpsGenieApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieRegion">OpsGenieRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.roles">Roles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#roles AlertConfiguration#roles}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.smsEnabled">SmsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#username AlertConfiguration#username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsApiKey">VictorOpsApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsRoutingKey">VictorOpsRoutingKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookSecret">WebhookSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookUrl">WebhookUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}. |

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}.

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}.

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}.

---

##### `DatadogApiKey`<sup>Optional</sup> <a name="DatadogApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogApiKey"></a>

```go
DatadogApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}.

---

##### `DatadogRegion`<sup>Optional</sup> <a name="DatadogRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogRegion"></a>

```go
DatadogRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}.

---

##### `DelayMin`<sup>Optional</sup> <a name="DelayMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.delayMin"></a>

```go
DelayMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}.

---

##### `EmailEnabled`<sup>Optional</sup> <a name="EmailEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailEnabled"></a>

```go
EmailEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}.

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#integration_id AlertConfiguration#integration_id}.

---

##### `IntervalMin`<sup>Optional</sup> <a name="IntervalMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.intervalMin"></a>

```go
IntervalMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}.

---

##### `MicrosoftTeamsWebhookUrl`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.microsoftTeamsWebhookUrl"></a>

```go
MicrosoftTeamsWebhookUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}.

---

##### `MobileNumber`<sup>Optional</sup> <a name="MobileNumber" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.mobileNumber"></a>

```go
MobileNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}.

---

##### `NotifierId`<sup>Optional</sup> <a name="NotifierId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.notifierId"></a>

```go
NotifierId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#notifier_id AlertConfiguration#notifier_id}.

---

##### `OpsGenieApiKey`<sup>Optional</sup> <a name="OpsGenieApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieApiKey"></a>

```go
OpsGenieApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}.

---

##### `OpsGenieRegion`<sup>Optional</sup> <a name="OpsGenieRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieRegion"></a>

```go
OpsGenieRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#roles AlertConfiguration#roles}.

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.serviceKey"></a>

```go
ServiceKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}.

---

##### `SmsEnabled`<sup>Optional</sup> <a name="SmsEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.smsEnabled"></a>

```go
SmsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}.

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#username AlertConfiguration#username}.

---

##### `VictorOpsApiKey`<sup>Optional</sup> <a name="VictorOpsApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsApiKey"></a>

```go
VictorOpsApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}.

---

##### `VictorOpsRoutingKey`<sup>Optional</sup> <a name="VictorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsRoutingKey"></a>

```go
VictorOpsRoutingKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}.

---

##### `WebhookSecret`<sup>Optional</sup> <a name="WebhookSecret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookSecret"></a>

```go
WebhookSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}.

---

##### `WebhookUrl`<sup>Optional</sup> <a name="WebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookUrl"></a>

```go
WebhookUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}.

---

### AlertConfigurationThresholdConfig <a name="AlertConfigurationThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

&alertconfiguration.AlertConfigurationThresholdConfig {
	Operator: *string,
	Threshold: *f64,
	Units: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#units AlertConfiguration#units}. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConfigurationMatcherList <a name="AlertConfigurationMatcherList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationMatcherList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertConfigurationMatcherList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get"></a>

```go
func Get(index *f64) AlertConfigurationMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationMatcherOutputReference <a name="AlertConfigurationMatcherOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertConfigurationMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationMetricThresholdConfigList <a name="AlertConfigurationMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationMetricThresholdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertConfigurationMetricThresholdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.get"></a>

```go
func Get(index *f64) AlertConfigurationMetricThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationMetricThresholdConfigOutputReference <a name="AlertConfigurationMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationMetricThresholdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertConfigurationMetricThresholdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetUnits"></a>

```go
func ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationNotificationList <a name="AlertConfigurationNotificationList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertConfigurationNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get"></a>

```go
func Get(index *f64) AlertConfigurationNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationNotificationOutputReference <a name="AlertConfigurationNotificationOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertConfigurationNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogApiKey">ResetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogRegion">ResetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDelayMin">ResetDelayMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailEnabled">ResetEmailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntervalMin">ResetIntervalMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMicrosoftTeamsWebhookUrl">ResetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMobileNumber">ResetMobileNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetNotifierId">ResetNotifierId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieApiKey">ResetOpsGenieApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieRegion">ResetOpsGenieRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetSmsEnabled">ResetSmsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsApiKey">ResetVictorOpsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsRoutingKey">ResetVictorOpsRoutingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookSecret">ResetWebhookSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookUrl">ResetWebhookUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetDatadogApiKey` <a name="ResetDatadogApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogApiKey"></a>

```go
func ResetDatadogApiKey()
```

##### `ResetDatadogRegion` <a name="ResetDatadogRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogRegion"></a>

```go
func ResetDatadogRegion()
```

##### `ResetDelayMin` <a name="ResetDelayMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDelayMin"></a>

```go
func ResetDelayMin()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetEmailEnabled` <a name="ResetEmailEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailEnabled"></a>

```go
func ResetEmailEnabled()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntegrationId"></a>

```go
func ResetIntegrationId()
```

##### `ResetIntervalMin` <a name="ResetIntervalMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntervalMin"></a>

```go
func ResetIntervalMin()
```

##### `ResetMicrosoftTeamsWebhookUrl` <a name="ResetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMicrosoftTeamsWebhookUrl"></a>

```go
func ResetMicrosoftTeamsWebhookUrl()
```

##### `ResetMobileNumber` <a name="ResetMobileNumber" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMobileNumber"></a>

```go
func ResetMobileNumber()
```

##### `ResetNotifierId` <a name="ResetNotifierId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetNotifierId"></a>

```go
func ResetNotifierId()
```

##### `ResetOpsGenieApiKey` <a name="ResetOpsGenieApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieApiKey"></a>

```go
func ResetOpsGenieApiKey()
```

##### `ResetOpsGenieRegion` <a name="ResetOpsGenieRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieRegion"></a>

```go
func ResetOpsGenieRegion()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetRoles"></a>

```go
func ResetRoles()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetServiceKey"></a>

```go
func ResetServiceKey()
```

##### `ResetSmsEnabled` <a name="ResetSmsEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetSmsEnabled"></a>

```go
func ResetSmsEnabled()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTeamId"></a>

```go
func ResetTeamId()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVictorOpsApiKey` <a name="ResetVictorOpsApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsApiKey"></a>

```go
func ResetVictorOpsApiKey()
```

##### `ResetVictorOpsRoutingKey` <a name="ResetVictorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsRoutingKey"></a>

```go
func ResetVictorOpsRoutingKey()
```

##### `ResetWebhookSecret` <a name="ResetWebhookSecret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookSecret"></a>

```go
func ResetWebhookSecret()
```

##### `ResetWebhookUrl` <a name="ResetWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookUrl"></a>

```go
func ResetWebhookUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKeyInput">DatadogApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegionInput">DatadogRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMinInput">DelayMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabledInput">EmailEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMinInput">IntervalMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrlInput">MicrosoftTeamsWebhookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumberInput">MobileNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierIdInput">NotifierIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKeyInput">OpsGenieApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegionInput">OpsGenieRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabledInput">SmsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKeyInput">VictorOpsApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKeyInput">VictorOpsRoutingKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecretInput">WebhookSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrlInput">WebhookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKey">DatadogApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMin">DelayMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabled">EmailEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMin">IntervalMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl">MicrosoftTeamsWebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumber">MobileNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierId">NotifierId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKey">OpsGenieApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegion">OpsGenieRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabled">SmsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKey">VictorOpsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey">VictorOpsRoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecret">WebhookSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrl">WebhookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `DatadogApiKeyInput`<sup>Optional</sup> <a name="DatadogApiKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKeyInput"></a>

```go
func DatadogApiKeyInput() *string
```

- *Type:* *string

---

##### `DatadogRegionInput`<sup>Optional</sup> <a name="DatadogRegionInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegionInput"></a>

```go
func DatadogRegionInput() *string
```

- *Type:* *string

---

##### `DelayMinInput`<sup>Optional</sup> <a name="DelayMinInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMinInput"></a>

```go
func DelayMinInput() *f64
```

- *Type:* *f64

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `EmailEnabledInput`<sup>Optional</sup> <a name="EmailEnabledInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabledInput"></a>

```go
func EmailEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `IntervalMinInput`<sup>Optional</sup> <a name="IntervalMinInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMinInput"></a>

```go
func IntervalMinInput() *f64
```

- *Type:* *f64

---

##### `MicrosoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="MicrosoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrlInput"></a>

```go
func MicrosoftTeamsWebhookUrlInput() *string
```

- *Type:* *string

---

##### `MobileNumberInput`<sup>Optional</sup> <a name="MobileNumberInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumberInput"></a>

```go
func MobileNumberInput() *string
```

- *Type:* *string

---

##### `NotifierIdInput`<sup>Optional</sup> <a name="NotifierIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierIdInput"></a>

```go
func NotifierIdInput() *string
```

- *Type:* *string

---

##### `OpsGenieApiKeyInput`<sup>Optional</sup> <a name="OpsGenieApiKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKeyInput"></a>

```go
func OpsGenieApiKeyInput() *string
```

- *Type:* *string

---

##### `OpsGenieRegionInput`<sup>Optional</sup> <a name="OpsGenieRegionInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegionInput"></a>

```go
func OpsGenieRegionInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKeyInput"></a>

```go
func ServiceKeyInput() *string
```

- *Type:* *string

---

##### `SmsEnabledInput`<sup>Optional</sup> <a name="SmsEnabledInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabledInput"></a>

```go
func SmsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VictorOpsApiKeyInput`<sup>Optional</sup> <a name="VictorOpsApiKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKeyInput"></a>

```go
func VictorOpsApiKeyInput() *string
```

- *Type:* *string

---

##### `VictorOpsRoutingKeyInput`<sup>Optional</sup> <a name="VictorOpsRoutingKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKeyInput"></a>

```go
func VictorOpsRoutingKeyInput() *string
```

- *Type:* *string

---

##### `WebhookSecretInput`<sup>Optional</sup> <a name="WebhookSecretInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecretInput"></a>

```go
func WebhookSecretInput() *string
```

- *Type:* *string

---

##### `WebhookUrlInput`<sup>Optional</sup> <a name="WebhookUrlInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrlInput"></a>

```go
func WebhookUrlInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `DatadogApiKey`<sup>Required</sup> <a name="DatadogApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKey"></a>

```go
func DatadogApiKey() *string
```

- *Type:* *string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegion"></a>

```go
func DatadogRegion() *string
```

- *Type:* *string

---

##### `DelayMin`<sup>Required</sup> <a name="DelayMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMin"></a>

```go
func DelayMin() *f64
```

- *Type:* *f64

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `EmailEnabled`<sup>Required</sup> <a name="EmailEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabled"></a>

```go
func EmailEnabled() interface{}
```

- *Type:* interface{}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IntervalMin`<sup>Required</sup> <a name="IntervalMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMin"></a>

```go
func IntervalMin() *f64
```

- *Type:* *f64

---

##### `MicrosoftTeamsWebhookUrl`<sup>Required</sup> <a name="MicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```go
func MicrosoftTeamsWebhookUrl() *string
```

- *Type:* *string

---

##### `MobileNumber`<sup>Required</sup> <a name="MobileNumber" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumber"></a>

```go
func MobileNumber() *string
```

- *Type:* *string

---

##### `NotifierId`<sup>Required</sup> <a name="NotifierId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierId"></a>

```go
func NotifierId() *string
```

- *Type:* *string

---

##### `OpsGenieApiKey`<sup>Required</sup> <a name="OpsGenieApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKey"></a>

```go
func OpsGenieApiKey() *string
```

- *Type:* *string

---

##### `OpsGenieRegion`<sup>Required</sup> <a name="OpsGenieRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegion"></a>

```go
func OpsGenieRegion() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `SmsEnabled`<sup>Required</sup> <a name="SmsEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabled"></a>

```go
func SmsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VictorOpsApiKey`<sup>Required</sup> <a name="VictorOpsApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKey"></a>

```go
func VictorOpsApiKey() *string
```

- *Type:* *string

---

##### `VictorOpsRoutingKey`<sup>Required</sup> <a name="VictorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey"></a>

```go
func VictorOpsRoutingKey() *string
```

- *Type:* *string

---

##### `WebhookSecret`<sup>Required</sup> <a name="WebhookSecret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecret"></a>

```go
func WebhookSecret() *string
```

- *Type:* *string

---

##### `WebhookUrl`<sup>Required</sup> <a name="WebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrl"></a>

```go
func WebhookUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationThresholdConfigList <a name="AlertConfigurationThresholdConfigList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationThresholdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertConfigurationThresholdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.get"></a>

```go
func Get(index *f64) AlertConfigurationThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConfigurationThresholdConfigOutputReference <a name="AlertConfigurationThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/alertconfiguration"

alertconfiguration.NewAlertConfigurationThresholdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertConfigurationThresholdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetUnits"></a>

```go
func ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



