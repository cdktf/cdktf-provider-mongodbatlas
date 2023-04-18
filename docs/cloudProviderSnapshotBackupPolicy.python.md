# `mongodbatlas_cloud_provider_snapshot_backup_policy`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_snapshot_backup_policy`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy).

# `cloudProviderSnapshotBackupPolicy` Submodule <a name="`cloudProviderSnapshotBackupPolicy` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderSnapshotBackupPolicy <a name="CloudProviderSnapshotBackupPolicy" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy(
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
  policies: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPolicies]],
  project_id: str,
  id: str = None,
  reference_hour_of_day: typing.Union[int, float] = None,
  reference_minute_of_hour: typing.Union[int, float] = None,
  restore_window_days: typing.Union[int, float] = None,
  update_snapshots: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]</code> | policies block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceHourOfDay">reference_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceMinuteOfHour">reference_minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.restoreWindowDays">restore_window_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.updateSnapshots">update_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.policies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#policies CloudProviderSnapshotBackupPolicy#policies}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reference_hour_of_day`<sup>Optional</sup> <a name="reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceHourOfDay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}.

---

##### `reference_minute_of_hour`<sup>Optional</sup> <a name="reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.referenceMinuteOfHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}.

---

##### `restore_window_days`<sup>Optional</sup> <a name="restore_window_days" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.restoreWindowDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}.

---

##### `update_snapshots`<sup>Optional</sup> <a name="update_snapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.Initializer.parameter.updateSnapshots"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceHourOfDay">reset_reference_hour_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceMinuteOfHour">reset_reference_minute_of_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetRestoreWindowDays">reset_restore_window_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetUpdateSnapshots">reset_update_snapshots</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_policies` <a name="put_policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies"></a>

```python
def put_policies(
  value: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.putPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_reference_hour_of_day` <a name="reset_reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceHourOfDay"></a>

```python
def reset_reference_hour_of_day() -> None
```

##### `reset_reference_minute_of_hour` <a name="reset_reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetReferenceMinuteOfHour"></a>

```python
def reset_reference_minute_of_hour() -> None
```

##### `reset_restore_window_days` <a name="reset_restore_window_days" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetRestoreWindowDays"></a>

```python
def reset_restore_window_days() -> None
```

##### `reset_update_snapshots` <a name="reset_update_snapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.resetUpdateSnapshots"></a>

```python
def reset_update_snapshots() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.nextSnapshot">next_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList">CloudProviderSnapshotBackupPolicyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policiesInput">policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDayInput">reference_hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHourInput">reference_minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDaysInput">restore_window_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshotsInput">update_snapshots_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDay">reference_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour">reference_minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDays">restore_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshots">update_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `next_snapshot`<sup>Required</sup> <a name="next_snapshot" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.nextSnapshot"></a>

```python
next_snapshot: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policies"></a>

```python
policies: CloudProviderSnapshotBackupPolicyPoliciesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList">CloudProviderSnapshotBackupPolicyPoliciesList</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.policiesInput"></a>

```python
policies_input: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `reference_hour_of_day_input`<sup>Optional</sup> <a name="reference_hour_of_day_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDayInput"></a>

```python
reference_hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reference_minute_of_hour_input`<sup>Optional</sup> <a name="reference_minute_of_hour_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHourInput"></a>

```python
reference_minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `restore_window_days_input`<sup>Optional</sup> <a name="restore_window_days_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDaysInput"></a>

```python
restore_window_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_snapshots_input`<sup>Optional</sup> <a name="update_snapshots_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshotsInput"></a>

```python
update_snapshots_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `reference_hour_of_day`<sup>Required</sup> <a name="reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceHourOfDay"></a>

```python
reference_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reference_minute_of_hour`<sup>Required</sup> <a name="reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.referenceMinuteOfHour"></a>

```python
reference_minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `restore_window_days`<sup>Required</sup> <a name="restore_window_days" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.restoreWindowDays"></a>

```python
restore_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_snapshots`<sup>Required</sup> <a name="update_snapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.updateSnapshots"></a>

```python
update_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderSnapshotBackupPolicyConfig <a name="CloudProviderSnapshotBackupPolicyConfig" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  policies: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPolicies]],
  project_id: str,
  id: str = None,
  reference_hour_of_day: typing.Union[int, float] = None,
  reference_minute_of_hour: typing.Union[int, float] = None,
  restore_window_days: typing.Union[int, float] = None,
  update_snapshots: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]</code> | policies block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceHourOfDay">reference_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceMinuteOfHour">reference_minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.restoreWindowDays">restore_window_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.updateSnapshots">update_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.policies"></a>

```python
policies: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#policies CloudProviderSnapshotBackupPolicy#policies}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reference_hour_of_day`<sup>Optional</sup> <a name="reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceHourOfDay"></a>

```python
reference_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}.

---

##### `reference_minute_of_hour`<sup>Optional</sup> <a name="reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.referenceMinuteOfHour"></a>

```python
reference_minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}.

---

##### `restore_window_days`<sup>Optional</sup> <a name="restore_window_days" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.restoreWindowDays"></a>

```python
restore_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}.

---

##### `update_snapshots`<sup>Optional</sup> <a name="update_snapshots" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyConfig.property.updateSnapshots"></a>

```python
update_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}.

---

### CloudProviderSnapshotBackupPolicyPolicies <a name="CloudProviderSnapshotBackupPolicyPolicies" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies(
  id: str,
  policy_item: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPoliciesPolicyItem]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.policyItem">policy_item</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]</code> | policy_item block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_item`<sup>Required</sup> <a name="policy_item" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies.property.policyItem"></a>

```python
policy_item: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPoliciesPolicyItem]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]

policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#policy_item CloudProviderSnapshotBackupPolicy#policy_item}

---

### CloudProviderSnapshotBackupPolicyPoliciesPolicyItem <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItem" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem(
  frequency_interval: typing.Union[int, float],
  frequency_type: str,
  id: str,
  retention_unit: str,
  retention_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyType">frequency_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionUnit">retention_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}.

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}.

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderSnapshotBackupPolicyPoliciesList <a name="CloudProviderSnapshotBackupPolicyPoliciesList" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudProviderSnapshotBackupPolicyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>]]

---


### CloudProviderSnapshotBackupPolicyPoliciesOutputReference <a name="CloudProviderSnapshotBackupPolicyPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem">put_policy_item</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_item` <a name="put_policy_item" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem"></a>

```python
def put_policy_item(
  value: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPoliciesPolicyItem]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.putPolicyItem.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem">policy_item</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItemInput">policy_item_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_item`<sup>Required</sup> <a name="policy_item" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItem"></a>

```python
policy_item: CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList">CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_item_input`<sup>Optional</sup> <a name="policy_item_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.policyItemInput"></a>

```python
policy_item_input: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPoliciesPolicyItem]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudProviderSnapshotBackupPolicyPolicies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPolicies">CloudProviderSnapshotBackupPolicyPolicies</a>, cdktf.IResolvable]

---


### CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudProviderSnapshotBackupPolicyPoliciesPolicyItem]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>]]

---


### CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference <a name="CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_provider_snapshot_backup_policy

cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyTypeInput">frequency_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnitInput">retention_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValueInput">retention_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_type_input`<sup>Optional</sup> <a name="frequency_type_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyTypeInput"></a>

```python
frequency_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `retention_unit_input`<sup>Optional</sup> <a name="retention_unit_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnitInput"></a>

```python
retention_unit_input: str
```

- *Type:* str

---

##### `retention_value_input`<sup>Optional</sup> <a name="retention_value_input" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValueInput"></a>

```python
retention_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudProviderSnapshotBackupPolicyPoliciesPolicyItem, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-mongodbatlas.cloudProviderSnapshotBackupPolicy.CloudProviderSnapshotBackupPolicyPoliciesPolicyItem">CloudProviderSnapshotBackupPolicyPoliciesPolicyItem</a>, cdktf.IResolvable]

---



