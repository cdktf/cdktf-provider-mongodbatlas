# `mongodbatlas_online_archive`

Refer to the Terraform Registory for docs: [`mongodbatlas_online_archive`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive).

# `onlineArchive` Submodule <a name="`onlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.onlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineArchive <a name="OnlineArchive" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive mongodbatlas_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  coll_name: str,
  criteria: OnlineArchiveCriteria,
  db_name: str,
  project_id: str,
  collection_type: str = None,
  id: str = None,
  partition_fields: typing.Union[IResolvable, typing.List[OnlineArchivePartitionFields]] = None,
  paused: typing.Union[bool, IResolvable] = None,
  schedule: OnlineArchiveSchedule = None,
  sync_creation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.collName">coll_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#coll_name OnlineArchive#coll_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#db_name OnlineArchive#db_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#project_id OnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.collectionType">collection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#collection_type OnlineArchive#collection_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#id OnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.partitionFields">partition_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#paused OnlineArchive#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.syncCreation">sync_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}.

---

##### `coll_name`<sup>Required</sup> <a name="coll_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.collName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#coll_name OnlineArchive#coll_name}.

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#criteria OnlineArchive#criteria}

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#db_name OnlineArchive#db_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#project_id OnlineArchive#project_id}.

---

##### `collection_type`<sup>Optional</sup> <a name="collection_type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.collectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#collection_type OnlineArchive#collection_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#id OnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_fields`<sup>Optional</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.partitionFields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#partition_fields OnlineArchive#partition_fields}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.paused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#paused OnlineArchive#paused}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#schedule OnlineArchive#schedule}

---

##### `sync_creation`<sup>Optional</sup> <a name="sync_creation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.Initializer.parameter.syncCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields">put_partition_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType">reset_collection_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields">reset_partition_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused">reset_paused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation">reset_sync_creation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_criteria` <a name="put_criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria"></a>

```python
def put_criteria(
  type: str,
  date_field: str = None,
  date_format: str = None,
  expire_after_days: typing.Union[int, float] = None,
  query: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#type OnlineArchive#type}.

---

###### `date_field`<sup>Optional</sup> <a name="date_field" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.dateField"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#date_field OnlineArchive#date_field}.

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.dateFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#date_format OnlineArchive#date_format}.

---

###### `expire_after_days`<sup>Optional</sup> <a name="expire_after_days" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.expireAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putCriteria.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#query OnlineArchive#query}.

---

##### `put_partition_fields` <a name="put_partition_fields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields"></a>

```python
def put_partition_fields(
  value: typing.Union[IResolvable, typing.List[OnlineArchivePartitionFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putPartitionFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule"></a>

```python
def put_schedule(
  type: str,
  day_of_month: typing.Union[int, float] = None,
  day_of_week: typing.Union[int, float] = None,
  end_hour: typing.Union[int, float] = None,
  end_minute: typing.Union[int, float] = None,
  start_hour: typing.Union[int, float] = None,
  start_minute: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#type OnlineArchive#type}.

---

###### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.dayOfMonth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}.

---

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.dayOfWeek"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}.

---

###### `end_hour`<sup>Optional</sup> <a name="end_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.endHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#end_hour OnlineArchive#end_hour}.

---

###### `end_minute`<sup>Optional</sup> <a name="end_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.endMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#end_minute OnlineArchive#end_minute}.

---

###### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.startHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#start_hour OnlineArchive#start_hour}.

---

###### `start_minute`<sup>Optional</sup> <a name="start_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.putSchedule.parameter.startMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#start_minute OnlineArchive#start_minute}.

---

##### `reset_collection_type` <a name="reset_collection_type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetCollectionType"></a>

```python
def reset_collection_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_partition_fields` <a name="reset_partition_fields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPartitionFields"></a>

```python
def reset_partition_fields() -> None
```

##### `reset_paused` <a name="reset_paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetPaused"></a>

```python
def reset_paused() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_sync_creation` <a name="reset_sync_creation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.resetSyncCreation"></a>

```python
def reset_sync_creation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId">archive_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields">partition_fields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput">collection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput">coll_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput">partition_fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput">paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput">sync_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType">collection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName">coll_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation">sync_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archive_id`<sup>Required</sup> <a name="archive_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.archiveId"></a>

```python
archive_id: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteria"></a>

```python
criteria: OnlineArchiveCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference">OnlineArchiveCriteriaOutputReference</a>

---

##### `partition_fields`<sup>Required</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFields"></a>

```python
partition_fields: OnlineArchivePartitionFieldsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList">OnlineArchivePartitionFieldsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.schedule"></a>

```python
schedule: OnlineArchiveScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference">OnlineArchiveScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `collection_type_input`<sup>Optional</sup> <a name="collection_type_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionTypeInput"></a>

```python
collection_type_input: str
```

- *Type:* str

---

##### `coll_name_input`<sup>Optional</sup> <a name="coll_name_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collNameInput"></a>

```python
coll_name_input: str
```

- *Type:* str

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.criteriaInput"></a>

```python
criteria_input: OnlineArchiveCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `partition_fields_input`<sup>Optional</sup> <a name="partition_fields_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.partitionFieldsInput"></a>

```python
partition_fields_input: typing.Union[IResolvable, typing.List[OnlineArchivePartitionFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.pausedInput"></a>

```python
paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.scheduleInput"></a>

```python
schedule_input: OnlineArchiveSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---

##### `sync_creation_input`<sup>Optional</sup> <a name="sync_creation_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreationInput"></a>

```python
sync_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `collection_type`<sup>Required</sup> <a name="collection_type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collectionType"></a>

```python
collection_type: str
```

- *Type:* str

---

##### `coll_name`<sup>Required</sup> <a name="coll_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.collName"></a>

```python
coll_name: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `sync_creation`<sup>Required</sup> <a name="sync_creation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.syncCreation"></a>

```python
sync_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineArchiveConfig <a name="OnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  coll_name: str,
  criteria: OnlineArchiveCriteria,
  db_name: str,
  project_id: str,
  collection_type: str = None,
  id: str = None,
  partition_fields: typing.Union[IResolvable, typing.List[OnlineArchivePartitionFields]] = None,
  paused: typing.Union[bool, IResolvable] = None,
  schedule: OnlineArchiveSchedule = None,
  sync_creation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName">coll_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#coll_name OnlineArchive#coll_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#db_name OnlineArchive#db_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#project_id OnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType">collection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#collection_type OnlineArchive#collection_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#id OnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields">partition_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]</code> | partition_fields block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#paused OnlineArchive#paused}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation">sync_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}.

---

##### `coll_name`<sup>Required</sup> <a name="coll_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collName"></a>

```python
coll_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#coll_name OnlineArchive#coll_name}.

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.criteria"></a>

```python
criteria: OnlineArchiveCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#criteria OnlineArchive#criteria}

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#db_name OnlineArchive#db_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#project_id OnlineArchive#project_id}.

---

##### `collection_type`<sup>Optional</sup> <a name="collection_type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.collectionType"></a>

```python
collection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#collection_type OnlineArchive#collection_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#id OnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_fields`<sup>Optional</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.partitionFields"></a>

```python
partition_fields: typing.Union[IResolvable, typing.List[OnlineArchivePartitionFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]

partition_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#partition_fields OnlineArchive#partition_fields}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#paused OnlineArchive#paused}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.schedule"></a>

```python
schedule: OnlineArchiveSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#schedule OnlineArchive#schedule}

---

##### `sync_creation`<sup>Optional</sup> <a name="sync_creation" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveConfig.property.syncCreation"></a>

```python
sync_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}.

---

### OnlineArchiveCriteria <a name="OnlineArchiveCriteria" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchiveCriteria(
  type: str,
  date_field: str = None,
  date_format: str = None,
  expire_after_days: typing.Union[int, float] = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField">date_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#date_field OnlineArchive#date_field}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat">date_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#date_format OnlineArchive#date_format}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays">expire_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#query OnlineArchive#query}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `date_field`<sup>Optional</sup> <a name="date_field" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateField"></a>

```python
date_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#date_field OnlineArchive#date_field}.

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#date_format OnlineArchive#date_format}.

---

##### `expire_after_days`<sup>Optional</sup> <a name="expire_after_days" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.expireAfterDays"></a>

```python
expire_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#query OnlineArchive#query}.

---

### OnlineArchivePartitionFields <a name="OnlineArchivePartitionFields" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchivePartitionFields(
  field_name: str,
  order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#field_name OnlineArchive#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#order OnlineArchive#order}. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#field_name OnlineArchive#field_name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#order OnlineArchive#order}.

---

### OnlineArchiveSchedule <a name="OnlineArchiveSchedule" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchiveSchedule(
  type: str,
  day_of_month: typing.Union[int, float] = None,
  day_of_week: typing.Union[int, float] = None,
  end_hour: typing.Union[int, float] = None,
  end_minute: typing.Union[int, float] = None,
  start_hour: typing.Union[int, float] = None,
  start_minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#type OnlineArchive#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour">end_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#end_hour OnlineArchive#end_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute">end_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#end_minute OnlineArchive#end_minute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#start_hour OnlineArchive#start_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#start_minute OnlineArchive#start_minute}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#type OnlineArchive#type}.

---

##### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}.

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}.

---

##### `end_hour`<sup>Optional</sup> <a name="end_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endHour"></a>

```python
end_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#end_hour OnlineArchive#end_hour}.

---

##### `end_minute`<sup>Optional</sup> <a name="end_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.endMinute"></a>

```python
end_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#end_minute OnlineArchive#end_minute}.

---

##### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#start_hour OnlineArchive#start_hour}.

---

##### `start_minute`<sup>Optional</sup> <a name="start_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/online_archive#start_minute OnlineArchive#start_minute}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineArchiveCriteriaOutputReference <a name="OnlineArchiveCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchiveCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField">reset_date_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays">reset_expire_after_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_field` <a name="reset_date_field" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateField"></a>

```python
def reset_date_field() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_expire_after_days` <a name="reset_expire_after_days" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetExpireAfterDays"></a>

```python
def reset_expire_after_days() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput">date_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput">expire_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField">date_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays">expire_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_field_input`<sup>Optional</sup> <a name="date_field_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFieldInput"></a>

```python
date_field_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `expire_after_days_input`<sup>Optional</sup> <a name="expire_after_days_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDaysInput"></a>

```python
expire_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `date_field`<sup>Required</sup> <a name="date_field" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateField"></a>

```python
date_field: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `expire_after_days`<sup>Required</sup> <a name="expire_after_days" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.expireAfterDays"></a>

```python
expire_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: OnlineArchiveCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveCriteria">OnlineArchiveCriteria</a>

---


### OnlineArchivePartitionFieldsList <a name="OnlineArchivePartitionFieldsList" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchivePartitionFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineArchivePartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OnlineArchivePartitionFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]]

---


### OnlineArchivePartitionFieldsOutputReference <a name="OnlineArchivePartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchivePartitionFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType">field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnlineArchivePartitionFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchivePartitionFields">OnlineArchivePartitionFields</a>]

---


### OnlineArchiveScheduleOutputReference <a name="OnlineArchiveScheduleOutputReference" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import online_archive

onlineArchive.OnlineArchiveScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth">reset_day_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour">reset_end_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute">reset_end_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour">reset_start_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute">reset_start_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_of_month` <a name="reset_day_of_month" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfMonth"></a>

```python
def reset_day_of_month() -> None
```

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_end_hour` <a name="reset_end_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndHour"></a>

```python
def reset_end_hour() -> None
```

##### `reset_end_minute` <a name="reset_end_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetEndMinute"></a>

```python
def reset_end_minute() -> None
```

##### `reset_start_hour` <a name="reset_start_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartHour"></a>

```python
def reset_start_hour() -> None
```

##### `reset_start_minute` <a name="reset_start_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.resetStartMinute"></a>

```python
def reset_start_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput">day_of_month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput">end_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput">end_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput">start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput">start_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour">end_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute">end_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month_input`<sup>Optional</sup> <a name="day_of_month_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonthInput"></a>

```python
day_of_month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_hour_input`<sup>Optional</sup> <a name="end_hour_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHourInput"></a>

```python
end_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_minute_input`<sup>Optional</sup> <a name="end_minute_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinuteInput"></a>

```python
end_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour_input`<sup>Optional</sup> <a name="start_hour_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHourInput"></a>

```python
start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute_input`<sup>Optional</sup> <a name="start_minute_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinuteInput"></a>

```python
start_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_hour`<sup>Required</sup> <a name="end_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endHour"></a>

```python
end_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_minute`<sup>Required</sup> <a name="end_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.endMinute"></a>

```python
end_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute`<sup>Required</sup> <a name="start_minute" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveScheduleOutputReference.property.internalValue"></a>

```python
internal_value: OnlineArchiveSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.onlineArchive.OnlineArchiveSchedule">OnlineArchiveSchedule</a>

---



