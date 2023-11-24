# `mongodbatlas_data_lake_pipeline`

Refer to the Terraform Registory for docs: [`mongodbatlas_data_lake_pipeline`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline).

# `dataLakePipeline` Submodule <a name="`dataLakePipeline` Submodule" id="@cdktf/provider-mongodbatlas.dataLakePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLakePipeline <a name="DataLakePipeline" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline mongodbatlas_data_lake_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  sink: DataLakePipelineSink = None,
  source: DataLakePipelineSource = None,
  transformations: typing.Union[IResolvable, typing.List[DataLakePipelineTransformations]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#name DataLakePipeline#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.sink">sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | sink block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.transformations">transformations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]</code> | transformations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#name DataLakePipeline#name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}.

---

##### `sink`<sup>Optional</sup> <a name="sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.sink"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#sink DataLakePipeline#sink}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#source DataLakePipeline#source}

---

##### `transformations`<sup>Optional</sup> <a name="transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.Initializer.parameter.transformations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]

transformations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#transformations DataLakePipeline#transformations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink">put_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putTransformations">put_transformations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSink">reset_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetTransformations">reset_transformations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_sink` <a name="put_sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink"></a>

```python
def put_sink(
  partition_fields: typing.Union[IResolvable, typing.List[DataLakePipelineSinkPartitionFields]] = None,
  provider: str = None,
  region: str = None,
  type: str = None
) -> None
```

###### `partition_fields`<sup>Optional</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink.parameter.partitionFields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#partition_fields DataLakePipeline#partition_fields}

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink.parameter.provider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#provider DataLakePipeline#provider}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#region DataLakePipeline#region}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSink.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource"></a>

```python
def put_source(
  cluster_name: str = None,
  collection_name: str = None,
  database_name: str = None,
  policy_item_id: str = None,
  project_id: str = None,
  type: str = None
) -> None
```

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#cluster_name DataLakePipeline#cluster_name}.

---

###### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.collectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#collection_name DataLakePipeline#collection_name}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#database_name DataLakePipeline#database_name}.

---

###### `policy_item_id`<sup>Optional</sup> <a name="policy_item_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.policyItemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#policy_item_id DataLakePipeline#policy_item_id}.

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putSource.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

##### `put_transformations` <a name="put_transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putTransformations"></a>

```python
def put_transformations(
  value: typing.Union[IResolvable, typing.List[DataLakePipelineTransformations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.putTransformations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]

---

##### `reset_sink` <a name="reset_sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSink"></a>

```python
def reset_sink() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_transformations` <a name="reset_transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.resetTransformations"></a>

```python
def reset_transformations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataLakePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataLakePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLakePipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLakePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLakePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.ingestionSchedules">ingestion_schedules</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList">DataLakePipelineIngestionSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sink">sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference">DataLakePipelineSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.snapshots">snapshots</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList">DataLakePipelineSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.source">source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference">DataLakePipelineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformations">transformations</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList">DataLakePipelineTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sinkInput">sink_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformationsInput">transformations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingestion_schedules`<sup>Required</sup> <a name="ingestion_schedules" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.ingestionSchedules"></a>

```python
ingestion_schedules: DataLakePipelineIngestionSchedulesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList">DataLakePipelineIngestionSchedulesList</a>

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `sink`<sup>Required</sup> <a name="sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sink"></a>

```python
sink: DataLakePipelineSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference">DataLakePipelineSinkOutputReference</a>

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.snapshots"></a>

```python
snapshots: DataLakePipelineSnapshotsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList">DataLakePipelineSnapshotsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.source"></a>

```python
source: DataLakePipelineSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference">DataLakePipelineSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `transformations`<sup>Required</sup> <a name="transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformations"></a>

```python
transformations: DataLakePipelineTransformationsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList">DataLakePipelineTransformationsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `sink_input`<sup>Optional</sup> <a name="sink_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sinkInput"></a>

```python
sink_input: DataLakePipelineSink
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.sourceInput"></a>

```python
source_input: DataLakePipelineSource
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

---

##### `transformations_input`<sup>Optional</sup> <a name="transformations_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.transformationsInput"></a>

```python
transformations_input: typing.Union[IResolvable, typing.List[DataLakePipelineTransformations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLakePipelineConfig <a name="DataLakePipelineConfig" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  sink: DataLakePipelineSink = None,
  source: DataLakePipelineSource = None,
  transformations: typing.Union[IResolvable, typing.List[DataLakePipelineTransformations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#name DataLakePipeline#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.sink">sink</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | sink block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.transformations">transformations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]</code> | transformations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#name DataLakePipeline#name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}.

---

##### `sink`<sup>Optional</sup> <a name="sink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.sink"></a>

```python
sink: DataLakePipelineSink
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#sink DataLakePipeline#sink}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.source"></a>

```python
source: DataLakePipelineSource
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#source DataLakePipeline#source}

---

##### `transformations`<sup>Optional</sup> <a name="transformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineConfig.property.transformations"></a>

```python
transformations: typing.Union[IResolvable, typing.List[DataLakePipelineTransformations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]

transformations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#transformations DataLakePipeline#transformations}

---

### DataLakePipelineIngestionSchedules <a name="DataLakePipelineIngestionSchedules" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineIngestionSchedules()
```


### DataLakePipelineSink <a name="DataLakePipelineSink" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSink(
  partition_fields: typing.Union[IResolvable, typing.List[DataLakePipelineSinkPartitionFields]] = None,
  provider: str = None,
  region: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.partitionFields">partition_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#provider DataLakePipeline#provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#region DataLakePipeline#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}. |

---

##### `partition_fields`<sup>Optional</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.partitionFields"></a>

```python
partition_fields: typing.Union[IResolvable, typing.List[DataLakePipelineSinkPartitionFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#partition_fields DataLakePipeline#partition_fields}

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#provider DataLakePipeline#provider}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#region DataLakePipeline#region}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

### DataLakePipelineSinkPartitionFields <a name="DataLakePipelineSinkPartitionFields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSinkPartitionFields(
  field_name: str,
  order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#field_name DataLakePipeline#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#order DataLakePipeline#order}. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#field_name DataLakePipeline#field_name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#order DataLakePipeline#order}.

---

### DataLakePipelineSnapshots <a name="DataLakePipelineSnapshots" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSnapshots()
```


### DataLakePipelineSource <a name="DataLakePipelineSource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSource(
  cluster_name: str = None,
  collection_name: str = None,
  database_name: str = None,
  policy_item_id: str = None,
  project_id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#cluster_name DataLakePipeline#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#collection_name DataLakePipeline#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#database_name DataLakePipeline#database_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.policyItemId">policy_item_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#policy_item_id DataLakePipeline#policy_item_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}. |

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#cluster_name DataLakePipeline#cluster_name}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#collection_name DataLakePipeline#collection_name}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#database_name DataLakePipeline#database_name}.

---

##### `policy_item_id`<sup>Optional</sup> <a name="policy_item_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.policyItemId"></a>

```python
policy_item_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#policy_item_id DataLakePipeline#policy_item_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#project_id DataLakePipeline#project_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

### DataLakePipelineTransformations <a name="DataLakePipelineTransformations" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineTransformations(
  field: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#field DataLakePipeline#field}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#field DataLakePipeline#field}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/data_lake_pipeline#type DataLakePipeline#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLakePipelineIngestionSchedulesList <a name="DataLakePipelineIngestionSchedulesList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineIngestionSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLakePipelineIngestionSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLakePipelineIngestionSchedulesOutputReference <a name="DataLakePipelineIngestionSchedulesOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules">DataLakePipelineIngestionSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataLakePipelineIngestionSchedules
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineIngestionSchedules">DataLakePipelineIngestionSchedules</a>

---


### DataLakePipelineSinkOutputReference <a name="DataLakePipelineSinkOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.putPartitionFields">put_partition_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetPartitionFields">reset_partition_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetProvider">reset_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_fields` <a name="put_partition_fields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.putPartitionFields"></a>

```python
def put_partition_fields(
  value: typing.Union[IResolvable, typing.List[DataLakePipelineSinkPartitionFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.putPartitionFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]

---

##### `reset_partition_fields` <a name="reset_partition_fields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetPartitionFields"></a>

```python
def reset_partition_fields() -> None
```

##### `reset_provider` <a name="reset_provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetProvider"></a>

```python
def reset_provider() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFields">partition_fields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList">DataLakePipelineSinkPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFieldsInput">partition_fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_fields`<sup>Required</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFields"></a>

```python
partition_fields: DataLakePipelineSinkPartitionFieldsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList">DataLakePipelineSinkPartitionFieldsList</a>

---

##### `partition_fields_input`<sup>Optional</sup> <a name="partition_fields_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.partitionFieldsInput"></a>

```python
partition_fields_input: typing.Union[IResolvable, typing.List[DataLakePipelineSinkPartitionFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkOutputReference.property.internalValue"></a>

```python
internal_value: DataLakePipelineSink
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSink">DataLakePipelineSink</a>

---


### DataLakePipelineSinkPartitionFieldsList <a name="DataLakePipelineSinkPartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSinkPartitionFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLakePipelineSinkPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataLakePipelineSinkPartitionFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]]

---


### DataLakePipelineSinkPartitionFieldsOutputReference <a name="DataLakePipelineSinkPartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataLakePipelineSinkPartitionFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSinkPartitionFields">DataLakePipelineSinkPartitionFields</a>]

---


### DataLakePipelineSnapshotsList <a name="DataLakePipelineSnapshotsList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSnapshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLakePipelineSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLakePipelineSnapshotsOutputReference <a name="DataLakePipelineSnapshotsOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.copyRegion">copy_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.frequencyYype">frequency_yype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.masterKey">master_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.mongodVersion">mongod_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.replicaSetName">replica_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots">DataLakePipelineSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_region`<sup>Required</sup> <a name="copy_region" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.copyRegion"></a>

```python
copy_region: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `frequency_yype`<sup>Required</sup> <a name="frequency_yype" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.frequencyYype"></a>

```python
frequency_yype: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `master_key`<sup>Required</sup> <a name="master_key" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.masterKey"></a>

```python
master_key: str
```

- *Type:* str

---

##### `mongod_version`<sup>Required</sup> <a name="mongod_version" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.mongodVersion"></a>

```python
mongod_version: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `replica_set_name`<sup>Required</sup> <a name="replica_set_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.replicaSetName"></a>

```python
replica_set_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: DataLakePipelineSnapshots
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSnapshots">DataLakePipelineSnapshots</a>

---


### DataLakePipelineSourceOutputReference <a name="DataLakePipelineSourceOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetCollectionName">reset_collection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetPolicyItemId">reset_policy_item_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_policy_item_id` <a name="reset_policy_item_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetPolicyItemId"></a>

```python
def reset_policy_item_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemIdInput">policy_item_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemId">policy_item_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `policy_item_id_input`<sup>Optional</sup> <a name="policy_item_id_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemIdInput"></a>

```python
policy_item_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `policy_item_id`<sup>Required</sup> <a name="policy_item_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.policyItemId"></a>

```python
policy_item_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataLakePipelineSource
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineSource">DataLakePipelineSource</a>

---


### DataLakePipelineTransformationsList <a name="DataLakePipelineTransformationsList" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineTransformationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLakePipelineTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataLakePipelineTransformations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]]

---


### DataLakePipelineTransformationsOutputReference <a name="DataLakePipelineTransformationsOutputReference" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_lake_pipeline

dataLakePipeline.DataLakePipelineTransformationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataLakePipelineTransformations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataLakePipeline.DataLakePipelineTransformations">DataLakePipelineTransformations</a>]

---



