# `mongodbatlas_event_trigger`

Refer to the Terraform Registory for docs: [`mongodbatlas_event_trigger`](https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger).

# `eventTrigger` Submodule <a name="`eventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.eventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventTrigger <a name="EventTrigger" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

eventtrigger.NewEventTrigger(scope Construct, id *string, config EventTriggerConfig) EventTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig">EventTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig">EventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors">PutEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection">ResetConfigCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase">ResetConfigDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument">ResetConfigFullDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore">ResetConfigFullDocumentBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch">ResetConfigMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType">ResetConfigOperationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes">ResetConfigOperationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject">ResetConfigProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders">ResetConfigProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule">ResetConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId">ResetConfigServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors">ResetEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId">ResetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered">ResetUnordered</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEventProcessors` <a name="PutEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors"></a>

```go
func PutEventProcessors(value EventTriggerEventProcessors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `ResetConfigCollection` <a name="ResetConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection"></a>

```go
func ResetConfigCollection()
```

##### `ResetConfigDatabase` <a name="ResetConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase"></a>

```go
func ResetConfigDatabase()
```

##### `ResetConfigFullDocument` <a name="ResetConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument"></a>

```go
func ResetConfigFullDocument()
```

##### `ResetConfigFullDocumentBefore` <a name="ResetConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore"></a>

```go
func ResetConfigFullDocumentBefore()
```

##### `ResetConfigMatch` <a name="ResetConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch"></a>

```go
func ResetConfigMatch()
```

##### `ResetConfigOperationType` <a name="ResetConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType"></a>

```go
func ResetConfigOperationType()
```

##### `ResetConfigOperationTypes` <a name="ResetConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes"></a>

```go
func ResetConfigOperationTypes()
```

##### `ResetConfigProject` <a name="ResetConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject"></a>

```go
func ResetConfigProject()
```

##### `ResetConfigProviders` <a name="ResetConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders"></a>

```go
func ResetConfigProviders()
```

##### `ResetConfigSchedule` <a name="ResetConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule"></a>

```go
func ResetConfigSchedule()
```

##### `ResetConfigServiceId` <a name="ResetConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId"></a>

```go
func ResetConfigServiceId()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEventProcessors` <a name="ResetEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors"></a>

```go
func ResetEventProcessors()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId"></a>

```go
func ResetFunctionId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetUnordered` <a name="ResetUnordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered"></a>

```go
func ResetUnordered()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

eventtrigger.EventTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

eventtrigger.EventTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

eventtrigger.EventTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType">ConfigScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors">EventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId">TriggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput">ConfigCollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput">ConfigDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput">ConfigFullDocumentBeforeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput">ConfigFullDocumentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput">ConfigMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput">ConfigOperationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput">ConfigOperationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput">ConfigProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput">ConfigProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput">ConfigScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput">ConfigServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput">EventProcessorsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput">FunctionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput">UnorderedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection">ConfigCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase">ConfigDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument">ConfigFullDocument</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore">ConfigFullDocumentBefore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch">ConfigMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType">ConfigOperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes">ConfigOperationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject">ConfigProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders">ConfigProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule">ConfigSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId">ConfigServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered">Unordered</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigScheduleType`<sup>Required</sup> <a name="ConfigScheduleType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType"></a>

```go
func ConfigScheduleType() *string
```

- *Type:* *string

---

##### `EventProcessors`<sup>Required</sup> <a name="EventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors"></a>

```go
func EventProcessors() EventTriggerEventProcessorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a>

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId"></a>

```go
func TriggerId() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `ConfigCollectionInput`<sup>Optional</sup> <a name="ConfigCollectionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput"></a>

```go
func ConfigCollectionInput() *string
```

- *Type:* *string

---

##### `ConfigDatabaseInput`<sup>Optional</sup> <a name="ConfigDatabaseInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput"></a>

```go
func ConfigDatabaseInput() *string
```

- *Type:* *string

---

##### `ConfigFullDocumentBeforeInput`<sup>Optional</sup> <a name="ConfigFullDocumentBeforeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput"></a>

```go
func ConfigFullDocumentBeforeInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigFullDocumentInput`<sup>Optional</sup> <a name="ConfigFullDocumentInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput"></a>

```go
func ConfigFullDocumentInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigMatchInput`<sup>Optional</sup> <a name="ConfigMatchInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput"></a>

```go
func ConfigMatchInput() *string
```

- *Type:* *string

---

##### `ConfigOperationTypeInput`<sup>Optional</sup> <a name="ConfigOperationTypeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput"></a>

```go
func ConfigOperationTypeInput() *string
```

- *Type:* *string

---

##### `ConfigOperationTypesInput`<sup>Optional</sup> <a name="ConfigOperationTypesInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput"></a>

```go
func ConfigOperationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigProjectInput`<sup>Optional</sup> <a name="ConfigProjectInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput"></a>

```go
func ConfigProjectInput() *string
```

- *Type:* *string

---

##### `ConfigProvidersInput`<sup>Optional</sup> <a name="ConfigProvidersInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput"></a>

```go
func ConfigProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigScheduleInput`<sup>Optional</sup> <a name="ConfigScheduleInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput"></a>

```go
func ConfigScheduleInput() *string
```

- *Type:* *string

---

##### `ConfigServiceIdInput`<sup>Optional</sup> <a name="ConfigServiceIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput"></a>

```go
func ConfigServiceIdInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventProcessorsInput`<sup>Optional</sup> <a name="EventProcessorsInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput"></a>

```go
func EventProcessorsInput() EventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput"></a>

```go
func FunctionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnorderedInput`<sup>Optional</sup> <a name="UnorderedInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput"></a>

```go
func UnorderedInput() interface{}
```

- *Type:* interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `ConfigCollection`<sup>Required</sup> <a name="ConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection"></a>

```go
func ConfigCollection() *string
```

- *Type:* *string

---

##### `ConfigDatabase`<sup>Required</sup> <a name="ConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase"></a>

```go
func ConfigDatabase() *string
```

- *Type:* *string

---

##### `ConfigFullDocument`<sup>Required</sup> <a name="ConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument"></a>

```go
func ConfigFullDocument() interface{}
```

- *Type:* interface{}

---

##### `ConfigFullDocumentBefore`<sup>Required</sup> <a name="ConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore"></a>

```go
func ConfigFullDocumentBefore() interface{}
```

- *Type:* interface{}

---

##### `ConfigMatch`<sup>Required</sup> <a name="ConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch"></a>

```go
func ConfigMatch() *string
```

- *Type:* *string

---

##### `ConfigOperationType`<sup>Required</sup> <a name="ConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType"></a>

```go
func ConfigOperationType() *string
```

- *Type:* *string

---

##### `ConfigOperationTypes`<sup>Required</sup> <a name="ConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes"></a>

```go
func ConfigOperationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigProject`<sup>Required</sup> <a name="ConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject"></a>

```go
func ConfigProject() *string
```

- *Type:* *string

---

##### `ConfigProviders`<sup>Required</sup> <a name="ConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders"></a>

```go
func ConfigProviders() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigSchedule`<sup>Required</sup> <a name="ConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule"></a>

```go
func ConfigSchedule() *string
```

- *Type:* *string

---

##### `ConfigServiceId`<sup>Required</sup> <a name="ConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId"></a>

```go
func ConfigServiceId() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unordered`<sup>Required</sup> <a name="Unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered"></a>

```go
func Unordered() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventTriggerConfig <a name="EventTriggerConfig" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

&eventtrigger.EventTriggerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Name: *string,
	ProjectId: *string,
	Type: *string,
	ConfigCollection: *string,
	ConfigDatabase: *string,
	ConfigFullDocument: interface{},
	ConfigFullDocumentBefore: interface{},
	ConfigMatch: *string,
	ConfigOperationType: *string,
	ConfigOperationTypes: *[]*string,
	ConfigProject: *string,
	ConfigProviders: *[]*string,
	ConfigSchedule: *string,
	ConfigServiceId: *string,
	Disabled: interface{},
	EventProcessors: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2.eventTrigger.EventTriggerEventProcessors,
	FunctionId: *string,
	Id: *string,
	Unordered: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection">ConfigCollection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase">ConfigDatabase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument">ConfigFullDocument</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore">ConfigFullDocumentBefore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch">ConfigMatch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType">ConfigOperationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes">ConfigOperationTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject">ConfigProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders">ConfigProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule">ConfigSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId">ConfigServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors">EventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId">FunctionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered">Unordered</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#unordered EventTrigger#unordered}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#app_id EventTrigger#app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#name EventTrigger#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#project_id EventTrigger#project_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#type EventTrigger#type}.

---

##### `ConfigCollection`<sup>Optional</sup> <a name="ConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection"></a>

```go
ConfigCollection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `ConfigDatabase`<sup>Optional</sup> <a name="ConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase"></a>

```go
ConfigDatabase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_database EventTrigger#config_database}.

---

##### `ConfigFullDocument`<sup>Optional</sup> <a name="ConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument"></a>

```go
ConfigFullDocument interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `ConfigFullDocumentBefore`<sup>Optional</sup> <a name="ConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore"></a>

```go
ConfigFullDocumentBefore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `ConfigMatch`<sup>Optional</sup> <a name="ConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch"></a>

```go
ConfigMatch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_match EventTrigger#config_match}.

---

##### `ConfigOperationType`<sup>Optional</sup> <a name="ConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType"></a>

```go
ConfigOperationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `ConfigOperationTypes`<sup>Optional</sup> <a name="ConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes"></a>

```go
ConfigOperationTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `ConfigProject`<sup>Optional</sup> <a name="ConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject"></a>

```go
ConfigProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_project EventTrigger#config_project}.

---

##### `ConfigProviders`<sup>Optional</sup> <a name="ConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders"></a>

```go
ConfigProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `ConfigSchedule`<sup>Optional</sup> <a name="ConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule"></a>

```go
ConfigSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `ConfigServiceId`<sup>Optional</sup> <a name="ConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId"></a>

```go
ConfigServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#disabled EventTrigger#disabled}.

---

##### `EventProcessors`<sup>Optional</sup> <a name="EventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors"></a>

```go
EventProcessors EventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#event_processors EventTrigger#event_processors}

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId"></a>

```go
FunctionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#function_id EventTrigger#function_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Unordered`<sup>Optional</sup> <a name="Unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered"></a>

```go
Unordered interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#unordered EventTrigger#unordered}.

---

### EventTriggerEventProcessors <a name="EventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

&eventtrigger.EventTriggerEventProcessors {
	AwsEventbridge: github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2.eventTrigger.EventTriggerEventProcessorsAwsEventbridge,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge">AwsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | aws_eventbridge block. |

---

##### `AwsEventbridge`<sup>Optional</sup> <a name="AwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge"></a>

```go
AwsEventbridge EventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

aws_eventbridge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}

---

### EventTriggerEventProcessorsAwsEventbridge <a name="EventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

&eventtrigger.EventTriggerEventProcessorsAwsEventbridge {
	ConfigAccountId: *string,
	ConfigRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId">ConfigAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_account_id EventTrigger#config_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion">ConfigRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_region EventTrigger#config_region}. |

---

##### `ConfigAccountId`<sup>Optional</sup> <a name="ConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId"></a>

```go
ConfigAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_account_id EventTrigger#config_account_id}.

---

##### `ConfigRegion`<sup>Optional</sup> <a name="ConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion"></a>

```go
ConfigRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/event_trigger#config_region EventTrigger#config_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="EventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

eventtrigger.NewEventTriggerEventProcessorsAwsEventbridgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventTriggerEventProcessorsAwsEventbridgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId">ResetConfigAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion">ResetConfigRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigAccountId` <a name="ResetConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId"></a>

```go
func ResetConfigAccountId()
```

##### `ResetConfigRegion` <a name="ResetConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion"></a>

```go
func ResetConfigRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput">ConfigAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput">ConfigRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">ConfigAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">ConfigRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigAccountIdInput`<sup>Optional</sup> <a name="ConfigAccountIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput"></a>

```go
func ConfigAccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigRegionInput`<sup>Optional</sup> <a name="ConfigRegionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput"></a>

```go
func ConfigRegionInput() *string
```

- *Type:* *string

---

##### `ConfigAccountId`<sup>Required</sup> <a name="ConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```go
func ConfigAccountId() *string
```

- *Type:* *string

---

##### `ConfigRegion`<sup>Required</sup> <a name="ConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```go
func ConfigRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```go
func InternalValue() EventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---


### EventTriggerEventProcessorsOutputReference <a name="EventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-mongodbatlas-go/mongodbatlas/v2/eventtrigger"

eventtrigger.NewEventTriggerEventProcessorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventTriggerEventProcessorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge">PutAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge">ResetAwsEventbridge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsEventbridge` <a name="PutAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge"></a>

```go
func PutAwsEventbridge(value EventTriggerEventProcessorsAwsEventbridge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `ResetAwsEventbridge` <a name="ResetAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge"></a>

```go
func ResetAwsEventbridge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge">AwsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput">AwsEventbridgeInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsEventbridge`<sup>Required</sup> <a name="AwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```go
func AwsEventbridge() EventTriggerEventProcessorsAwsEventbridgeOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a>

---

##### `AwsEventbridgeInput`<sup>Optional</sup> <a name="AwsEventbridgeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput"></a>

```go
func AwsEventbridgeInput() EventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```go
func InternalValue() EventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---



