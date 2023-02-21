# `dataMongodbatlasCloudProviderSnapshotRestoreJobs` Submodule <a name="`dataMongodbatlasCloudProviderSnapshotRestoreJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobs <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs mongodbatlas_cloud_provider_snapshot_restore_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  project_id: str,
  id: str = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#project_id DataMongodbatlasCloudProviderSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#id DataMongodbatlasCloudProviderSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudProviderSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#page_num DataMongodbatlasCloudProviderSnapshotRestoreJobs#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJobs#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#project_id DataMongodbatlasCloudProviderSnapshotRestoreJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#id DataMongodbatlasCloudProviderSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.itemsPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudProviderSnapshotRestoreJobs#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.Initializer.parameter.pageNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#page_num DataMongodbatlasCloudProviderSnapshotRestoreJobs#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetPageNum">reset_page_num</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.resetPageNum"></a>

```python
def reset_page_num() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList">DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.results"></a>

```python
results: DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList">DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  project_id: str,
  id: str = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#project_id DataMongodbatlasCloudProviderSnapshotRestoreJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#id DataMongodbatlasCloudProviderSnapshotRestoreJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudProviderSnapshotRestoreJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#page_num DataMongodbatlasCloudProviderSnapshotRestoreJobs#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#cluster_name DataMongodbatlasCloudProviderSnapshotRestoreJobs#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#project_id DataMongodbatlasCloudProviderSnapshotRestoreJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#id DataMongodbatlasCloudProviderSnapshotRestoreJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#items_per_page DataMongodbatlasCloudProviderSnapshotRestoreJobs#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsConfig.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_provider_snapshot_restore_jobs#page_num DataMongodbatlasCloudProviderSnapshotRestoreJobs#page_num}.

---

### DataMongodbatlasCloudProviderSnapshotRestoreJobsResults <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference <a name="DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_provider_snapshot_restore_jobs

dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.cancelled">cancelled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryType">delivery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl">delivery_url</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogInc">oplog_inc</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogTs">oplog_ts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds">point_in_time_utc_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetClusterName">target_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetProjectId">target_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults">DataMongodbatlasCloudProviderSnapshotRestoreJobsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cancelled`<sup>Required</sup> <a name="cancelled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.cancelled"></a>

```python
cancelled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `delivery_type`<sup>Required</sup> <a name="delivery_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryType"></a>

```python
delivery_type: str
```

- *Type:* str

---

##### `delivery_url`<sup>Required</sup> <a name="delivery_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.deliveryUrl"></a>

```python
delivery_url: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expired"></a>

```python
expired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oplog_inc`<sup>Required</sup> <a name="oplog_inc" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogInc"></a>

```python
oplog_inc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oplog_ts`<sup>Required</sup> <a name="oplog_ts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.oplogTs"></a>

```python
oplog_ts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_in_time_utc_seconds`<sup>Required</sup> <a name="point_in_time_utc_seconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.pointInTimeUtcSeconds"></a>

```python
point_in_time_utc_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `target_cluster_name`<sup>Required</sup> <a name="target_cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetClusterName"></a>

```python
target_cluster_name: str
```

- *Type:* str

---

##### `target_project_id`<sup>Required</sup> <a name="target_project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.targetProjectId"></a>

```python
target_project_id: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasCloudProviderSnapshotRestoreJobsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderSnapshotRestoreJobs.DataMongodbatlasCloudProviderSnapshotRestoreJobsResults">DataMongodbatlasCloudProviderSnapshotRestoreJobsResults</a>

---



