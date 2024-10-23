# `dataMongodbatlasCloudBackupSnapshotExportJobs` Submodule <a name="`dataMongodbatlasCloudBackupSnapshotExportJobs` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshotExportJobs <a name="DataMongodbatlasCloudBackupSnapshotExportJobs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs mongodbatlas_cloud_backup_snapshot_export_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs(
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
  project_id: str,
  id: str = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotExportJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#project_id DataMongodbatlasCloudBackupSnapshotExportJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#id DataMongodbatlasCloudBackupSnapshotExportJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotExportJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#page_num DataMongodbatlasCloudBackupSnapshotExportJobs#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotExportJobs#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#project_id DataMongodbatlasCloudBackupSnapshotExportJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#id DataMongodbatlasCloudBackupSnapshotExportJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.itemsPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotExportJobs#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.Initializer.parameter.pageNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#page_num DataMongodbatlasCloudBackupSnapshotExportJobs#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetPageNum">reset_page_num</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.resetPageNum"></a>

```python
def reset_page_num() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotExportJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasCloudBackupSnapshotExportJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotExportJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList">DataMongodbatlasCloudBackupSnapshotExportJobsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.results"></a>

```python
results: DataMongodbatlasCloudBackupSnapshotExportJobsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList">DataMongodbatlasCloudBackupSnapshotExportJobsResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotExportJobsConfig <a name="DataMongodbatlasCloudBackupSnapshotExportJobsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotExportJobs#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#project_id DataMongodbatlasCloudBackupSnapshotExportJobs#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#id DataMongodbatlasCloudBackupSnapshotExportJobs#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotExportJobs#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#page_num DataMongodbatlasCloudBackupSnapshotExportJobs#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotExportJobs#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#project_id DataMongodbatlasCloudBackupSnapshotExportJobs#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#id DataMongodbatlasCloudBackupSnapshotExportJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotExportJobs#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsConfig.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/cloud_backup_snapshot_export_jobs#page_num DataMongodbatlasCloudBackupSnapshotExportJobs#page_num}.

---

### DataMongodbatlasCloudBackupSnapshotExportJobsResults <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResults()
```


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents()
```


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.replicaSetName">replica_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents">DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `replica_set_name`<sup>Required</sup> <a name="replica_set_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.replicaSetName"></a>

```python
replica_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents">DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents</a>

---


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData">DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData">DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData</a>

---


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsList <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshot_export_jobs

dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.components">components</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList">DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.customData">custom_data</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList">DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportBucketId">export_bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportJobId">export_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportStatusExportedCollections">export_status_exported_collections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportStatusTotalCollections">export_status_total_collections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResults">DataMongodbatlasCloudBackupSnapshotExportJobsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.components"></a>

```python
components: DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList">DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.customData"></a>

```python
custom_data: DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList">DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList</a>

---

##### `export_bucket_id`<sup>Required</sup> <a name="export_bucket_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportBucketId"></a>

```python
export_bucket_id: str
```

- *Type:* str

---

##### `export_job_id`<sup>Required</sup> <a name="export_job_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportJobId"></a>

```python
export_job_id: str
```

- *Type:* str

---

##### `export_status_exported_collections`<sup>Required</sup> <a name="export_status_exported_collections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportStatusExportedCollections"></a>

```python
export_status_exported_collections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `export_status_total_collections`<sup>Required</sup> <a name="export_status_total_collections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.exportStatusTotalCollections"></a>

```python
export_status_total_collections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasCloudBackupSnapshotExportJobsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshotExportJobs.DataMongodbatlasCloudBackupSnapshotExportJobsResults">DataMongodbatlasCloudBackupSnapshotExportJobsResults</a>

---



