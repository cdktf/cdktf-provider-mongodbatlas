# `streamProcessor` Submodule <a name="`streamProcessor` Submodule" id="@cdktf/provider-mongodbatlas.streamProcessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamProcessor <a name="StreamProcessor" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor mongodbatlas_stream_processor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  pipeline: str,
  processor_name: str,
  project_id: str,
  options: StreamProcessorOptions = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Human-readable label that identifies the stream instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.pipeline">pipeline</a></code> | <code>str</code> | Stream aggregation pipeline you want to apply to your streaming data. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.processorName">processor_name</a></code> | <code>str</code> | Human-readable label that identifies the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a></code> | Optional configuration for the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the stream processor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.instanceName"></a>

- *Type:* str

Human-readable label that identifies the stream instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#instance_name StreamProcessor#instance_name}

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.pipeline"></a>

- *Type:* str

Stream aggregation pipeline you want to apply to your streaming data.

[MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/#std-label-stream-aggregation) contain more information. Using [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) is recommended when settig this attribute. For more details see [Aggregation Pipelines Documentation](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#pipeline StreamProcessor#pipeline}

---

##### `processor_name`<sup>Required</sup> <a name="processor_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.processorName"></a>

- *Type:* str

Human-readable label that identifies the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#processor_name StreamProcessor#processor_name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.projectId"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#project_id StreamProcessor#project_id}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

Optional configuration for the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#options StreamProcessor#options}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.state"></a>

- *Type:* str

The state of the stream processor.

Commonly occurring states are 'CREATED', 'STARTED', 'STOPPED' and 'FAILED'. Used to start or stop the Stream Processor. Valid values are `CREATED`, `STARTED` or `STOPPED`. When a Stream Processor is created without specifying the state, it will default to `CREATED` state.

**NOTE** When a stream processor is created, the only valid states are CREATED or STARTED. A stream processor can be automatically started when creating it if the state is set to STARTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#state StreamProcessor#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.putOptions"></a>

```python
def put_options(
  dlq: StreamProcessorOptionsDlq
) -> None
```

###### `dlq`<sup>Required</sup> <a name="dlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.putOptions.parameter.dlq"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>

Dead letter queue for the stream processor. Refer to the [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/reference/glossary/#std-term-dead-letter-queue) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#dlq StreamProcessor#dlq}

---

##### `reset_options` <a name="reset_options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamProcessor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamProcessor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamProcessor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamProcessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamProcessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.options">options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference">StreamProcessorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stats">stats</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.optionsInput">options_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipelineInput">pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorNameInput">processor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipeline">pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorName">processor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.options"></a>

```python
options: StreamProcessorOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference">StreamProcessorOptionsOutputReference</a>

---

##### `stats`<sup>Required</sup> <a name="stats" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stats"></a>

```python
stats: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.optionsInput"></a>

```python
options_input: typing.Union[IResolvable, StreamProcessorOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>]

---

##### `pipeline_input`<sup>Optional</sup> <a name="pipeline_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipelineInput"></a>

```python
pipeline_input: str
```

- *Type:* str

---

##### `processor_name_input`<sup>Optional</sup> <a name="processor_name_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorNameInput"></a>

```python
processor_name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipeline"></a>

```python
pipeline: str
```

- *Type:* str

---

##### `processor_name`<sup>Required</sup> <a name="processor_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorName"></a>

```python
processor_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamProcessorConfig <a name="StreamProcessorConfig" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  pipeline: str,
  processor_name: str,
  project_id: str,
  options: StreamProcessorOptions = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Human-readable label that identifies the stream instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.pipeline">pipeline</a></code> | <code>str</code> | Stream aggregation pipeline you want to apply to your streaming data. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.processorName">processor_name</a></code> | <code>str</code> | Human-readable label that identifies the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a></code> | Optional configuration for the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.state">state</a></code> | <code>str</code> | The state of the stream processor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Human-readable label that identifies the stream instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#instance_name StreamProcessor#instance_name}

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.pipeline"></a>

```python
pipeline: str
```

- *Type:* str

Stream aggregation pipeline you want to apply to your streaming data.

[MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/#std-label-stream-aggregation) contain more information. Using [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) is recommended when settig this attribute. For more details see [Aggregation Pipelines Documentation](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#pipeline StreamProcessor#pipeline}

---

##### `processor_name`<sup>Required</sup> <a name="processor_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.processorName"></a>

```python
processor_name: str
```

- *Type:* str

Human-readable label that identifies the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#processor_name StreamProcessor#processor_name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#project_id StreamProcessor#project_id}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.options"></a>

```python
options: StreamProcessorOptions
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

Optional configuration for the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#options StreamProcessor#options}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the stream processor.

Commonly occurring states are 'CREATED', 'STARTED', 'STOPPED' and 'FAILED'. Used to start or stop the Stream Processor. Valid values are `CREATED`, `STARTED` or `STOPPED`. When a Stream Processor is created without specifying the state, it will default to `CREATED` state.

**NOTE** When a stream processor is created, the only valid states are CREATED or STARTED. A stream processor can be automatically started when creating it if the state is set to STARTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#state StreamProcessor#state}

---

### StreamProcessorOptions <a name="StreamProcessorOptions" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessorOptions(
  dlq: StreamProcessorOptionsDlq
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions.property.dlq">dlq</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a></code> | Dead letter queue for the stream processor. Refer to the [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/reference/glossary/#std-term-dead-letter-queue) for more information. |

---

##### `dlq`<sup>Required</sup> <a name="dlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions.property.dlq"></a>

```python
dlq: StreamProcessorOptionsDlq
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>

Dead letter queue for the stream processor. Refer to the [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/reference/glossary/#std-term-dead-letter-queue) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#dlq StreamProcessor#dlq}

---

### StreamProcessorOptionsDlq <a name="StreamProcessorOptionsDlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessorOptionsDlq(
  coll: str,
  connection_name: str,
  db: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.coll">coll</a></code> | <code>str</code> | Name of the collection to use for the DLQ. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.connectionName">connection_name</a></code> | <code>str</code> | Name of the connection to write DLQ messages to. Must be an Atlas connection. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.db">db</a></code> | <code>str</code> | Name of the database to use for the DLQ. |

---

##### `coll`<sup>Required</sup> <a name="coll" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.coll"></a>

```python
coll: str
```

- *Type:* str

Name of the collection to use for the DLQ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#coll StreamProcessor#coll}

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Name of the connection to write DLQ messages to. Must be an Atlas connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#connection_name StreamProcessor#connection_name}

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.db"></a>

```python
db: str
```

- *Type:* str

Name of the database to use for the DLQ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#db StreamProcessor#db}

---

## Classes <a name="Classes" id="Classes"></a>

### StreamProcessorOptionsDlqOutputReference <a name="StreamProcessorOptionsDlqOutputReference" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessorOptionsDlqOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.collInput">coll_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.dbInput">db_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.coll">coll</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.db">db</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coll_input`<sup>Optional</sup> <a name="coll_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.collInput"></a>

```python
coll_input: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `db_input`<sup>Optional</sup> <a name="db_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.dbInput"></a>

```python
db_input: str
```

- *Type:* str

---

##### `coll`<sup>Required</sup> <a name="coll" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.coll"></a>

```python
coll: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.db"></a>

```python
db: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamProcessorOptionsDlq]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>]

---


### StreamProcessorOptionsOutputReference <a name="StreamProcessorOptionsOutputReference" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_processor

streamProcessor.StreamProcessorOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq">put_dlq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dlq` <a name="put_dlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq"></a>

```python
def put_dlq(
  coll: str,
  connection_name: str,
  db: str
) -> None
```

###### `coll`<sup>Required</sup> <a name="coll" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq.parameter.coll"></a>

- *Type:* str

Name of the collection to use for the DLQ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#coll StreamProcessor#coll}

---

###### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq.parameter.connectionName"></a>

- *Type:* str

Name of the connection to write DLQ messages to. Must be an Atlas connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#connection_name StreamProcessor#connection_name}

---

###### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq.parameter.db"></a>

- *Type:* str

Name of the database to use for the DLQ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/resources/stream_processor#db StreamProcessor#db}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlq">dlq</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference">StreamProcessorOptionsDlqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlqInput">dlq_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dlq`<sup>Required</sup> <a name="dlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlq"></a>

```python
dlq: StreamProcessorOptionsDlqOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference">StreamProcessorOptionsDlqOutputReference</a>

---

##### `dlq_input`<sup>Optional</sup> <a name="dlq_input" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlqInput"></a>

```python
dlq_input: typing.Union[IResolvable, StreamProcessorOptionsDlq]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamProcessorOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>]

---



