# `eventTrigger` Submodule <a name="`eventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.eventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventTrigger <a name="EventTrigger" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  name: str,
  project_id: str,
  type: str,
  config_collection: str = None,
  config_database: str = None,
  config_full_document: typing.Union[bool, IResolvable] = None,
  config_full_document_before: typing.Union[bool, IResolvable] = None,
  config_match: str = None,
  config_operation_type: str = None,
  config_operation_types: typing.List[str] = None,
  config_project: str = None,
  config_providers: typing.List[str] = None,
  config_schedule: str = None,
  config_service_id: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  event_processors: EventTriggerEventProcessors = None,
  function_id: str = None,
  id: str = None,
  unordered: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configCollection">config_collection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configDatabase">config_database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocument">config_full_document</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocumentBefore">config_full_document_before</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configMatch">config_match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationType">config_operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationTypes">config_operation_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProject">config_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProviders">config_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configSchedule">config_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configServiceId">config_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.eventProcessors">event_processors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.unordered">unordered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#unordered EventTrigger#unordered}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#app_id EventTrigger#app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#name EventTrigger#name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#project_id EventTrigger#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#type EventTrigger#type}.

---

##### `config_collection`<sup>Optional</sup> <a name="config_collection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configCollection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `config_database`<sup>Optional</sup> <a name="config_database" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configDatabase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_database EventTrigger#config_database}.

---

##### `config_full_document`<sup>Optional</sup> <a name="config_full_document" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocument"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `config_full_document_before`<sup>Optional</sup> <a name="config_full_document_before" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configFullDocumentBefore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `config_match`<sup>Optional</sup> <a name="config_match" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configMatch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_match EventTrigger#config_match}.

---

##### `config_operation_type`<sup>Optional</sup> <a name="config_operation_type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `config_operation_types`<sup>Optional</sup> <a name="config_operation_types" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configOperationTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `config_project`<sup>Optional</sup> <a name="config_project" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_project EventTrigger#config_project}.

---

##### `config_providers`<sup>Optional</sup> <a name="config_providers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `config_schedule`<sup>Optional</sup> <a name="config_schedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `config_service_id`<sup>Optional</sup> <a name="config_service_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.configServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#disabled EventTrigger#disabled}.

---

##### `event_processors`<sup>Optional</sup> <a name="event_processors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.eventProcessors"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#event_processors EventTrigger#event_processors}

---

##### `function_id`<sup>Optional</sup> <a name="function_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.functionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#function_id EventTrigger#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `unordered`<sup>Optional</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.Initializer.parameter.unordered"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#unordered EventTrigger#unordered}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors">put_event_processors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection">reset_config_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase">reset_config_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument">reset_config_full_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore">reset_config_full_document_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch">reset_config_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType">reset_config_operation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes">reset_config_operation_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject">reset_config_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders">reset_config_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule">reset_config_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId">reset_config_service_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors">reset_event_processors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId">reset_function_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered">reset_unordered</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_processors` <a name="put_event_processors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors"></a>

```python
def put_event_processors(
  aws_eventbridge: EventTriggerEventProcessorsAwsEventbridge = None
) -> None
```

###### `aws_eventbridge`<sup>Optional</sup> <a name="aws_eventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.putEventProcessors.parameter.awsEventbridge"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

aws_eventbridge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}

---

##### `reset_config_collection` <a name="reset_config_collection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigCollection"></a>

```python
def reset_config_collection() -> None
```

##### `reset_config_database` <a name="reset_config_database" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigDatabase"></a>

```python
def reset_config_database() -> None
```

##### `reset_config_full_document` <a name="reset_config_full_document" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocument"></a>

```python
def reset_config_full_document() -> None
```

##### `reset_config_full_document_before` <a name="reset_config_full_document_before" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigFullDocumentBefore"></a>

```python
def reset_config_full_document_before() -> None
```

##### `reset_config_match` <a name="reset_config_match" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigMatch"></a>

```python
def reset_config_match() -> None
```

##### `reset_config_operation_type` <a name="reset_config_operation_type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationType"></a>

```python
def reset_config_operation_type() -> None
```

##### `reset_config_operation_types` <a name="reset_config_operation_types" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigOperationTypes"></a>

```python
def reset_config_operation_types() -> None
```

##### `reset_config_project` <a name="reset_config_project" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProject"></a>

```python
def reset_config_project() -> None
```

##### `reset_config_providers` <a name="reset_config_providers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigProviders"></a>

```python
def reset_config_providers() -> None
```

##### `reset_config_schedule` <a name="reset_config_schedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigSchedule"></a>

```python
def reset_config_schedule() -> None
```

##### `reset_config_service_id` <a name="reset_config_service_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetConfigServiceId"></a>

```python
def reset_config_service_id() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_event_processors` <a name="reset_event_processors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetEventProcessors"></a>

```python
def reset_event_processors() -> None
```

##### `reset_function_id` <a name="reset_function_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetFunctionId"></a>

```python
def reset_function_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_unordered` <a name="reset_unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.resetUnordered"></a>

```python
def reset_unordered() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTrigger.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType">config_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors">event_processors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput">config_collection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput">config_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput">config_full_document_before_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput">config_full_document_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput">config_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput">config_operation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput">config_operation_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput">config_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput">config_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput">config_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput">config_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput">event_processors_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput">function_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput">unordered_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection">config_collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase">config_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument">config_full_document</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore">config_full_document_before</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch">config_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType">config_operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes">config_operation_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject">config_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders">config_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule">config_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId">config_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered">unordered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_schedule_type`<sup>Required</sup> <a name="config_schedule_type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleType"></a>

```python
config_schedule_type: str
```

- *Type:* str

---

##### `event_processors`<sup>Required</sup> <a name="event_processors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessors"></a>

```python
event_processors: EventTriggerEventProcessorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference">EventTriggerEventProcessorsOutputReference</a>

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `config_collection_input`<sup>Optional</sup> <a name="config_collection_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollectionInput"></a>

```python
config_collection_input: str
```

- *Type:* str

---

##### `config_database_input`<sup>Optional</sup> <a name="config_database_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabaseInput"></a>

```python
config_database_input: str
```

- *Type:* str

---

##### `config_full_document_before_input`<sup>Optional</sup> <a name="config_full_document_before_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBeforeInput"></a>

```python
config_full_document_before_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_full_document_input`<sup>Optional</sup> <a name="config_full_document_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentInput"></a>

```python
config_full_document_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_match_input`<sup>Optional</sup> <a name="config_match_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatchInput"></a>

```python
config_match_input: str
```

- *Type:* str

---

##### `config_operation_type_input`<sup>Optional</sup> <a name="config_operation_type_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypeInput"></a>

```python
config_operation_type_input: str
```

- *Type:* str

---

##### `config_operation_types_input`<sup>Optional</sup> <a name="config_operation_types_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypesInput"></a>

```python
config_operation_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_project_input`<sup>Optional</sup> <a name="config_project_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProjectInput"></a>

```python
config_project_input: str
```

- *Type:* str

---

##### `config_providers_input`<sup>Optional</sup> <a name="config_providers_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProvidersInput"></a>

```python
config_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_schedule_input`<sup>Optional</sup> <a name="config_schedule_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configScheduleInput"></a>

```python
config_schedule_input: str
```

- *Type:* str

---

##### `config_service_id_input`<sup>Optional</sup> <a name="config_service_id_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceIdInput"></a>

```python
config_service_id_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_processors_input`<sup>Optional</sup> <a name="event_processors_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.eventProcessorsInput"></a>

```python
event_processors_input: EventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---

##### `function_id_input`<sup>Optional</sup> <a name="function_id_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionIdInput"></a>

```python
function_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unordered_input`<sup>Optional</sup> <a name="unordered_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unorderedInput"></a>

```python
unordered_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `config_collection`<sup>Required</sup> <a name="config_collection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configCollection"></a>

```python
config_collection: str
```

- *Type:* str

---

##### `config_database`<sup>Required</sup> <a name="config_database" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configDatabase"></a>

```python
config_database: str
```

- *Type:* str

---

##### `config_full_document`<sup>Required</sup> <a name="config_full_document" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocument"></a>

```python
config_full_document: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_full_document_before`<sup>Required</sup> <a name="config_full_document_before" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configFullDocumentBefore"></a>

```python
config_full_document_before: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_match`<sup>Required</sup> <a name="config_match" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configMatch"></a>

```python
config_match: str
```

- *Type:* str

---

##### `config_operation_type`<sup>Required</sup> <a name="config_operation_type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationType"></a>

```python
config_operation_type: str
```

- *Type:* str

---

##### `config_operation_types`<sup>Required</sup> <a name="config_operation_types" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configOperationTypes"></a>

```python
config_operation_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_project`<sup>Required</sup> <a name="config_project" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProject"></a>

```python
config_project: str
```

- *Type:* str

---

##### `config_providers`<sup>Required</sup> <a name="config_providers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configProviders"></a>

```python
config_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_schedule`<sup>Required</sup> <a name="config_schedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configSchedule"></a>

```python
config_schedule: str
```

- *Type:* str

---

##### `config_service_id`<sup>Required</sup> <a name="config_service_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.configServiceId"></a>

```python
config_service_id: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.unordered"></a>

```python
unordered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventTriggerConfig <a name="EventTriggerConfig" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  name: str,
  project_id: str,
  type: str,
  config_collection: str = None,
  config_database: str = None,
  config_full_document: typing.Union[bool, IResolvable] = None,
  config_full_document_before: typing.Union[bool, IResolvable] = None,
  config_match: str = None,
  config_operation_type: str = None,
  config_operation_types: typing.List[str] = None,
  config_project: str = None,
  config_providers: typing.List[str] = None,
  config_schedule: str = None,
  config_service_id: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  event_processors: EventTriggerEventProcessors = None,
  function_id: str = None,
  id: str = None,
  unordered: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#app_id EventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#name EventTrigger#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#project_id EventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#type EventTrigger#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection">config_collection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_collection EventTrigger#config_collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase">config_database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_database EventTrigger#config_database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument">config_full_document</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore">config_full_document_before</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch">config_match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_match EventTrigger#config_match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType">config_operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes">config_operation_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject">config_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_project EventTrigger#config_project}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders">config_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_providers EventTrigger#config_providers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule">config_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId">config_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#disabled EventTrigger#disabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors">event_processors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | event_processors block. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#function_id EventTrigger#function_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#id EventTrigger#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered">unordered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#unordered EventTrigger#unordered}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#app_id EventTrigger#app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#name EventTrigger#name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#project_id EventTrigger#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#type EventTrigger#type}.

---

##### `config_collection`<sup>Optional</sup> <a name="config_collection" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configCollection"></a>

```python
config_collection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_collection EventTrigger#config_collection}.

---

##### `config_database`<sup>Optional</sup> <a name="config_database" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configDatabase"></a>

```python
config_database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_database EventTrigger#config_database}.

---

##### `config_full_document`<sup>Optional</sup> <a name="config_full_document" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocument"></a>

```python
config_full_document: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}.

---

##### `config_full_document_before`<sup>Optional</sup> <a name="config_full_document_before" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configFullDocumentBefore"></a>

```python
config_full_document_before: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}.

---

##### `config_match`<sup>Optional</sup> <a name="config_match" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configMatch"></a>

```python
config_match: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_match EventTrigger#config_match}.

---

##### `config_operation_type`<sup>Optional</sup> <a name="config_operation_type" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationType"></a>

```python
config_operation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}.

---

##### `config_operation_types`<sup>Optional</sup> <a name="config_operation_types" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configOperationTypes"></a>

```python
config_operation_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}.

---

##### `config_project`<sup>Optional</sup> <a name="config_project" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProject"></a>

```python
config_project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_project EventTrigger#config_project}.

---

##### `config_providers`<sup>Optional</sup> <a name="config_providers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configProviders"></a>

```python
config_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_providers EventTrigger#config_providers}.

---

##### `config_schedule`<sup>Optional</sup> <a name="config_schedule" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configSchedule"></a>

```python
config_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}.

---

##### `config_service_id`<sup>Optional</sup> <a name="config_service_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.configServiceId"></a>

```python
config_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#disabled EventTrigger#disabled}.

---

##### `event_processors`<sup>Optional</sup> <a name="event_processors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.eventProcessors"></a>

```python
event_processors: EventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

event_processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#event_processors EventTrigger#event_processors}

---

##### `function_id`<sup>Optional</sup> <a name="function_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#function_id EventTrigger#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#id EventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `unordered`<sup>Optional</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerConfig.property.unordered"></a>

```python
unordered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#unordered EventTrigger#unordered}.

---

### EventTriggerEventProcessors <a name="EventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTriggerEventProcessors(
  aws_eventbridge: EventTriggerEventProcessorsAwsEventbridge = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge">aws_eventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | aws_eventbridge block. |

---

##### `aws_eventbridge`<sup>Optional</sup> <a name="aws_eventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors.property.awsEventbridge"></a>

```python
aws_eventbridge: EventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

aws_eventbridge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}

---

### EventTriggerEventProcessorsAwsEventbridge <a name="EventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTriggerEventProcessorsAwsEventbridge(
  config_account_id: str = None,
  config_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId">config_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion">config_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_region EventTrigger#config_region}. |

---

##### `config_account_id`<sup>Optional</sup> <a name="config_account_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configAccountId"></a>

```python
config_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}.

---

##### `config_region`<sup>Optional</sup> <a name="config_region" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge.property.configRegion"></a>

```python
config_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_region EventTrigger#config_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="EventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId">reset_config_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion">reset_config_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config_account_id` <a name="reset_config_account_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigAccountId"></a>

```python
def reset_config_account_id() -> None
```

##### `reset_config_region` <a name="reset_config_region" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.resetConfigRegion"></a>

```python
def reset_config_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput">config_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput">config_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">config_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">config_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_account_id_input`<sup>Optional</sup> <a name="config_account_id_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountIdInput"></a>

```python
config_account_id_input: str
```

- *Type:* str

---

##### `config_region_input`<sup>Optional</sup> <a name="config_region_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegionInput"></a>

```python
config_region_input: str
```

- *Type:* str

---

##### `config_account_id`<sup>Required</sup> <a name="config_account_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```python
config_account_id: str
```

- *Type:* str

---

##### `config_region`<sup>Required</sup> <a name="config_region" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```python
config_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```python
internal_value: EventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---


### EventTriggerEventProcessorsOutputReference <a name="EventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import event_trigger

eventTrigger.EventTriggerEventProcessorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge">put_aws_eventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge">reset_aws_eventbridge</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_eventbridge` <a name="put_aws_eventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge"></a>

```python
def put_aws_eventbridge(
  config_account_id: str = None,
  config_region: str = None
) -> None
```

###### `config_account_id`<sup>Optional</sup> <a name="config_account_id" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge.parameter.configAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}.

---

###### `config_region`<sup>Optional</sup> <a name="config_region" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.putAwsEventbridge.parameter.configRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/resources/event_trigger#config_region EventTrigger#config_region}.

---

##### `reset_aws_eventbridge` <a name="reset_aws_eventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.resetAwsEventbridge"></a>

```python
def reset_aws_eventbridge() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge">aws_eventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput">aws_eventbridge_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_eventbridge`<sup>Required</sup> <a name="aws_eventbridge" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```python
aws_eventbridge: EventTriggerEventProcessorsAwsEventbridgeOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridgeOutputReference">EventTriggerEventProcessorsAwsEventbridgeOutputReference</a>

---

##### `aws_eventbridge_input`<sup>Optional</sup> <a name="aws_eventbridge_input" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.awsEventbridgeInput"></a>

```python
aws_eventbridge_input: EventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsAwsEventbridge">EventTriggerEventProcessorsAwsEventbridge</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```python
internal_value: EventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.eventTrigger.EventTriggerEventProcessors">EventTriggerEventProcessors</a>

---



