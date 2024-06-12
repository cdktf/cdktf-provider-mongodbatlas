# `eventTrigger` Submodule <a name="`eventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.eventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventTrigger <a name="EventTrigger" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTrigger;

EventTrigger.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .type(java.lang.String)
//  .configCollection(java.lang.String)
//  .configDatabase(java.lang.String)
//  .configFullDocument(java.lang.Boolean)
//  .configFullDocument(IResolvable)
//  .configFullDocumentBefore(java.lang.Boolean)
//  .configFullDocumentBefore(IResolvable)
//  .configMatch(java.lang.String)
//  .configOperationType(java.lang.String)
//  .configOperationTypes(java.util.List<java.lang.String>)
//  .configProject(java.lang.String)
//  .configProviders(java.util.List<java.lang.String>)
//  .configSchedule(java.lang.String)
//  .configServiceId(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .eventProcessors(EventTriggerEventProcessors)
//  .functionId(java.lang.String)
//  .id(java.lang.String)
//  .unordered(java.lang.Boolean)
//  .unordered(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configCollection">configCollection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configDatabase">configDatabase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocument">configFullDocument</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configMatch">configMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationType">configOperationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationTypes">configOperationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProject">configProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProviders">configProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configSchedule">configSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configServiceId">configServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.unordered">unordered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#unordered EventTrigger#unordered}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#app_id EventTrigger#app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#name EventTrigger#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#project_id EventTrigger#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#type EventTrigger#type}.

---

##### `configCollection`<sup>Optional</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configCollection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `configDatabase`<sup>Optional</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configDatabase"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_database EventTrigger#config_database}.

---

##### `configFullDocument`<sup>Optional</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocument"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `configFullDocumentBefore`<sup>Optional</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocumentBefore"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `configMatch`<sup>Optional</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configMatch"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_match EventTrigger#config_match}.

---

##### `configOperationType`<sup>Optional</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `configOperationTypes`<sup>Optional</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `configProject`<sup>Optional</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_project EventTrigger#config_project}.

---

##### `configProviders`<sup>Optional</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProviders"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `configSchedule`<sup>Optional</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configSchedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `configServiceId`<sup>Optional</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#disabled EventTrigger#disabled}.

---

##### `eventProcessors`<sup>Optional</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.eventProcessors"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#event_processors EventTrigger#event_processors}

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.functionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#function_id EventTrigger#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `unordered`<sup>Optional</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.unordered"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#unordered EventTrigger#unordered}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors">putEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection">resetConfigCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase">resetConfigDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument">resetConfigFullDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore">resetConfigFullDocumentBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch">resetConfigMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType">resetConfigOperationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes">resetConfigOperationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject">resetConfigProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders">resetConfigProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule">resetConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId">resetConfigServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors">resetEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered">resetUnordered</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventProcessors` <a name="putEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors"></a>

```java
public void putEventProcessors(EventTriggerEventProcessors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `resetConfigCollection` <a name="resetConfigCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection"></a>

```java
public void resetConfigCollection()
```

##### `resetConfigDatabase` <a name="resetConfigDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase"></a>

```java
public void resetConfigDatabase()
```

##### `resetConfigFullDocument` <a name="resetConfigFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument"></a>

```java
public void resetConfigFullDocument()
```

##### `resetConfigFullDocumentBefore` <a name="resetConfigFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore"></a>

```java
public void resetConfigFullDocumentBefore()
```

##### `resetConfigMatch` <a name="resetConfigMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch"></a>

```java
public void resetConfigMatch()
```

##### `resetConfigOperationType` <a name="resetConfigOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType"></a>

```java
public void resetConfigOperationType()
```

##### `resetConfigOperationTypes` <a name="resetConfigOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes"></a>

```java
public void resetConfigOperationTypes()
```

##### `resetConfigProject` <a name="resetConfigProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject"></a>

```java
public void resetConfigProject()
```

##### `resetConfigProviders` <a name="resetConfigProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders"></a>

```java
public void resetConfigProviders()
```

##### `resetConfigSchedule` <a name="resetConfigSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule"></a>

```java
public void resetConfigSchedule()
```

##### `resetConfigServiceId` <a name="resetConfigServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId"></a>

```java
public void resetConfigServiceId()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEventProcessors` <a name="resetEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors"></a>

```java
public void resetEventProcessors()
```

##### `resetFunctionId` <a name="resetFunctionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId"></a>

```java
public void resetFunctionId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId"></a>

```java
public void resetId()
```

##### `resetUnordered` <a name="resetUnordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered"></a>

```java
public void resetUnordered()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTrigger;

EventTrigger.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTrigger;

EventTrigger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTrigger;

EventTrigger.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTrigger;

EventTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType">configScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput">configCollectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput">configDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput">configFullDocumentBeforeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput">configFullDocumentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput">configMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput">configOperationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput">configOperationTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput">configProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput">configProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput">configScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput">configServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput">eventProcessorsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput">unorderedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection">configCollection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase">configDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument">configFullDocument</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch">configMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType">configOperationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes">configOperationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject">configProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders">configProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule">configSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId">configServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered">unordered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configScheduleType`<sup>Required</sup> <a name="configScheduleType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType"></a>

```java
public java.lang.String getConfigScheduleType();
```

- *Type:* java.lang.String

---

##### `eventProcessors`<sup>Required</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors"></a>

```java
public EventTriggerEventProcessorsOutputReference getEventProcessors();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `configCollectionInput`<sup>Optional</sup> <a name="configCollectionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput"></a>

```java
public java.lang.String getConfigCollectionInput();
```

- *Type:* java.lang.String

---

##### `configDatabaseInput`<sup>Optional</sup> <a name="configDatabaseInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput"></a>

```java
public java.lang.String getConfigDatabaseInput();
```

- *Type:* java.lang.String

---

##### `configFullDocumentBeforeInput`<sup>Optional</sup> <a name="configFullDocumentBeforeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput"></a>

```java
public java.lang.Object getConfigFullDocumentBeforeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configFullDocumentInput`<sup>Optional</sup> <a name="configFullDocumentInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput"></a>

```java
public java.lang.Object getConfigFullDocumentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configMatchInput`<sup>Optional</sup> <a name="configMatchInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput"></a>

```java
public java.lang.String getConfigMatchInput();
```

- *Type:* java.lang.String

---

##### `configOperationTypeInput`<sup>Optional</sup> <a name="configOperationTypeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput"></a>

```java
public java.lang.String getConfigOperationTypeInput();
```

- *Type:* java.lang.String

---

##### `configOperationTypesInput`<sup>Optional</sup> <a name="configOperationTypesInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput"></a>

```java
public java.util.List<java.lang.String> getConfigOperationTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configProjectInput`<sup>Optional</sup> <a name="configProjectInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput"></a>

```java
public java.lang.String getConfigProjectInput();
```

- *Type:* java.lang.String

---

##### `configProvidersInput`<sup>Optional</sup> <a name="configProvidersInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput"></a>

```java
public java.util.List<java.lang.String> getConfigProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configScheduleInput`<sup>Optional</sup> <a name="configScheduleInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput"></a>

```java
public java.lang.String getConfigScheduleInput();
```

- *Type:* java.lang.String

---

##### `configServiceIdInput`<sup>Optional</sup> <a name="configServiceIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput"></a>

```java
public java.lang.String getConfigServiceIdInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventProcessorsInput`<sup>Optional</sup> <a name="eventProcessorsInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput"></a>

```java
public EventTriggerEventProcessors getEventProcessorsInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unorderedInput`<sup>Optional</sup> <a name="unorderedInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput"></a>

```java
public java.lang.Object getUnorderedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `configCollection`<sup>Required</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection"></a>

```java
public java.lang.String getConfigCollection();
```

- *Type:* java.lang.String

---

##### `configDatabase`<sup>Required</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase"></a>

```java
public java.lang.String getConfigDatabase();
```

- *Type:* java.lang.String

---

##### `configFullDocument`<sup>Required</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument"></a>

```java
public java.lang.Object getConfigFullDocument();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configFullDocumentBefore`<sup>Required</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore"></a>

```java
public java.lang.Object getConfigFullDocumentBefore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configMatch`<sup>Required</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch"></a>

```java
public java.lang.String getConfigMatch();
```

- *Type:* java.lang.String

---

##### `configOperationType`<sup>Required</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType"></a>

```java
public java.lang.String getConfigOperationType();
```

- *Type:* java.lang.String

---

##### `configOperationTypes`<sup>Required</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes"></a>

```java
public java.util.List<java.lang.String> getConfigOperationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configProject`<sup>Required</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject"></a>

```java
public java.lang.String getConfigProject();
```

- *Type:* java.lang.String

---

##### `configProviders`<sup>Required</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders"></a>

```java
public java.util.List<java.lang.String> getConfigProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configSchedule`<sup>Required</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule"></a>

```java
public java.lang.String getConfigSchedule();
```

- *Type:* java.lang.String

---

##### `configServiceId`<sup>Required</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId"></a>

```java
public java.lang.String getConfigServiceId();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered"></a>

```java
public java.lang.Object getUnordered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventTriggerConfig <a name="EventTriggerConfig" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTriggerConfig;

EventTriggerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .type(java.lang.String)
//  .configCollection(java.lang.String)
//  .configDatabase(java.lang.String)
//  .configFullDocument(java.lang.Boolean)
//  .configFullDocument(IResolvable)
//  .configFullDocumentBefore(java.lang.Boolean)
//  .configFullDocumentBefore(IResolvable)
//  .configMatch(java.lang.String)
//  .configOperationType(java.lang.String)
//  .configOperationTypes(java.util.List<java.lang.String>)
//  .configProject(java.lang.String)
//  .configProviders(java.util.List<java.lang.String>)
//  .configSchedule(java.lang.String)
//  .configServiceId(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .eventProcessors(EventTriggerEventProcessors)
//  .functionId(java.lang.String)
//  .id(java.lang.String)
//  .unordered(java.lang.Boolean)
//  .unordered(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection">configCollection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase">configDatabase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument">configFullDocument</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch">configMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType">configOperationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes">configOperationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject">configProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders">configProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule">configSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId">configServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered">unordered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#unordered EventTrigger#unordered}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#app_id EventTrigger#app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#name EventTrigger#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#project_id EventTrigger#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#type EventTrigger#type}.

---

##### `configCollection`<sup>Optional</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection"></a>

```java
public java.lang.String getConfigCollection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `configDatabase`<sup>Optional</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase"></a>

```java
public java.lang.String getConfigDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_database EventTrigger#config_database}.

---

##### `configFullDocument`<sup>Optional</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument"></a>

```java
public java.lang.Object getConfigFullDocument();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `configFullDocumentBefore`<sup>Optional</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore"></a>

```java
public java.lang.Object getConfigFullDocumentBefore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `configMatch`<sup>Optional</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch"></a>

```java
public java.lang.String getConfigMatch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_match EventTrigger#config_match}.

---

##### `configOperationType`<sup>Optional</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType"></a>

```java
public java.lang.String getConfigOperationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `configOperationTypes`<sup>Optional</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes"></a>

```java
public java.util.List<java.lang.String> getConfigOperationTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `configProject`<sup>Optional</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject"></a>

```java
public java.lang.String getConfigProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_project EventTrigger#config_project}.

---

##### `configProviders`<sup>Optional</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders"></a>

```java
public java.util.List<java.lang.String> getConfigProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `configSchedule`<sup>Optional</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule"></a>

```java
public java.lang.String getConfigSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `configServiceId`<sup>Optional</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId"></a>

```java
public java.lang.String getConfigServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#disabled EventTrigger#disabled}.

---

##### `eventProcessors`<sup>Optional</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors"></a>

```java
public EventTriggerEventProcessors getEventProcessors();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#event_processors EventTrigger#event_processors}

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#function_id EventTrigger#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `unordered`<sup>Optional</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered"></a>

```java
public java.lang.Object getUnordered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#unordered EventTrigger#unordered}.

---

### EventTriggerEventProcessors <a name="EventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTriggerEventProcessors;

EventTriggerEventProcessors.builder()
//  .awsEventbridge(EventTriggerEventProcessorsAwsEventbridge)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge">awsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | aws_eventbridge block. |

---

##### `awsEventbridge`<sup>Optional</sup> <a name="awsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge"></a>

```java
public EventTriggerEventProcessorsAwsEventbridge getAwsEventbridge();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

aws_eventbridge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}

---

### EventTriggerEventProcessorsAwsEventbridge <a name="EventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTriggerEventProcessorsAwsEventbridge;

EventTriggerEventProcessorsAwsEventbridge.builder()
//  .configAccountId(java.lang.String)
//  .configRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId">configAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion">configRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_region EventTrigger#config_region}. |

---

##### `configAccountId`<sup>Optional</sup> <a name="configAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId"></a>

```java
public java.lang.String getConfigAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}.

---

##### `configRegion`<sup>Optional</sup> <a name="configRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion"></a>

```java
public java.lang.String getConfigRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_region EventTrigger#config_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="EventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference;

new EventTriggerEventProcessorsAwsEventbridgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId">resetConfigAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion">resetConfigRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigAccountId` <a name="resetConfigAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId"></a>

```java
public void resetConfigAccountId()
```

##### `resetConfigRegion` <a name="resetConfigRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion"></a>

```java
public void resetConfigRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput">configAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput">configRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">configAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">configRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configAccountIdInput`<sup>Optional</sup> <a name="configAccountIdInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput"></a>

```java
public java.lang.String getConfigAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configRegionInput`<sup>Optional</sup> <a name="configRegionInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput"></a>

```java
public java.lang.String getConfigRegionInput();
```

- *Type:* java.lang.String

---

##### `configAccountId`<sup>Required</sup> <a name="configAccountId" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```java
public java.lang.String getConfigAccountId();
```

- *Type:* java.lang.String

---

##### `configRegion`<sup>Required</sup> <a name="configRegion" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```java
public java.lang.String getConfigRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```java
public EventTriggerEventProcessorsAwsEventbridge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---


### EventTriggerEventProcessorsOutputReference <a name="EventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.event_trigger.EventTriggerEventProcessorsOutputReference;

new EventTriggerEventProcessorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge">putAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge">resetAwsEventbridge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsEventbridge` <a name="putAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge"></a>

```java
public void putAwsEventbridge(EventTriggerEventProcessorsAwsEventbridge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `resetAwsEventbridge` <a name="resetAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge"></a>

```java
public void resetAwsEventbridge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge">awsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput">awsEventbridgeInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsEventbridge`<sup>Required</sup> <a name="awsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```java
public EventTriggerEventProcessorsAwsEventbridgeOutputReference getAwsEventbridge();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a>

---

##### `awsEventbridgeInput`<sup>Optional</sup> <a name="awsEventbridgeInput" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput"></a>

```java
public EventTriggerEventProcessorsAwsEventbridge getAwsEventbridgeInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```java
public EventTriggerEventProcessors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---



