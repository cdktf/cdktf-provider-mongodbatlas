# `dataMongodbatlasCloudBackupSnapshots` Submodule <a name="`dataMongodbatlasCloudBackupSnapshots` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudBackupSnapshots <a name="DataMongodbatlasCloudBackupSnapshots" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots mongodbatlas_cloud_backup_snapshots}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots(
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#cluster_name DataMongodbatlasCloudBackupSnapshots#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#project_id DataMongodbatlasCloudBackupSnapshots#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#id DataMongodbatlasCloudBackupSnapshots#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#items_per_page DataMongodbatlasCloudBackupSnapshots#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#page_num DataMongodbatlasCloudBackupSnapshots#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#cluster_name DataMongodbatlasCloudBackupSnapshots#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#project_id DataMongodbatlasCloudBackupSnapshots#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#id DataMongodbatlasCloudBackupSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.itemsPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#items_per_page DataMongodbatlasCloudBackupSnapshots#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.Initializer.parameter.pageNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#page_num DataMongodbatlasCloudBackupSnapshots#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetPageNum">reset_page_num</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.resetPageNum"></a>

```python
def reset_page_num() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshots resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshots resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshots to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasCloudBackupSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList">DataMongodbatlasCloudBackupSnapshotsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.results"></a>

```python
results: DataMongodbatlasCloudBackupSnapshotsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList">DataMongodbatlasCloudBackupSnapshotsResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshots.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudBackupSnapshotsConfig <a name="DataMongodbatlasCloudBackupSnapshotsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig(
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#cluster_name DataMongodbatlasCloudBackupSnapshots#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#project_id DataMongodbatlasCloudBackupSnapshots#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#id DataMongodbatlasCloudBackupSnapshots#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#items_per_page DataMongodbatlasCloudBackupSnapshots#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#page_num DataMongodbatlasCloudBackupSnapshots#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#cluster_name DataMongodbatlasCloudBackupSnapshots#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#project_id DataMongodbatlasCloudBackupSnapshots#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#id DataMongodbatlasCloudBackupSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#items_per_page DataMongodbatlasCloudBackupSnapshots#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsConfig.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/cloud_backup_snapshots#page_num DataMongodbatlasCloudBackupSnapshots#page_num}.

---

### DataMongodbatlasCloudBackupSnapshotsResults <a name="DataMongodbatlasCloudBackupSnapshotsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResults()
```


### DataMongodbatlasCloudBackupSnapshotsResultsMembers <a name="DataMongodbatlasCloudBackupSnapshotsResultsMembers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudBackupSnapshotsResultsList <a name="DataMongodbatlasCloudBackupSnapshotsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasCloudBackupSnapshotsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasCloudBackupSnapshotsResultsMembersList <a name="DataMongodbatlasCloudBackupSnapshotsResultsMembersList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference <a name="DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.replicaSetName">replica_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembers">DataMongodbatlasCloudBackupSnapshotsResultsMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replica_set_name`<sup>Required</sup> <a name="replica_set_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.replicaSetName"></a>

```python
replica_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasCloudBackupSnapshotsResultsMembers
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembers">DataMongodbatlasCloudBackupSnapshotsResultsMembers</a>

---


### DataMongodbatlasCloudBackupSnapshotsResultsOutputReference <a name="DataMongodbatlasCloudBackupSnapshotsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_cloud_backup_snapshots

dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.masterKeyUuid">master_key_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.members">members</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList">DataMongodbatlasCloudBackupSnapshotsResultsMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.mongodVersion">mongod_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.replicaSetName">replica_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.snapshotIds">snapshot_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.storageSizeBytes">storage_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResults">DataMongodbatlasCloudBackupSnapshotsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `master_key_uuid`<sup>Required</sup> <a name="master_key_uuid" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.masterKeyUuid"></a>

```python
master_key_uuid: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.members"></a>

```python
members: DataMongodbatlasCloudBackupSnapshotsResultsMembersList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsMembersList">DataMongodbatlasCloudBackupSnapshotsResultsMembersList</a>

---

##### `mongod_version`<sup>Required</sup> <a name="mongod_version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.mongodVersion"></a>

```python
mongod_version: str
```

- *Type:* str

---

##### `replica_set_name`<sup>Required</sup> <a name="replica_set_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.replicaSetName"></a>

```python
replica_set_name: str
```

- *Type:* str

---

##### `snapshot_ids`<sup>Required</sup> <a name="snapshot_ids" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.snapshotIds"></a>

```python
snapshot_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_size_bytes`<sup>Required</sup> <a name="storage_size_bytes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.storageSizeBytes"></a>

```python
storage_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasCloudBackupSnapshotsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudBackupSnapshots.DataMongodbatlasCloudBackupSnapshotsResults">DataMongodbatlasCloudBackupSnapshotsResults</a>

---



