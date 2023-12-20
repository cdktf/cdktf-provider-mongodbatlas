# `cloudBackupSchedule` Submodule <a name="`cloudBackupSchedule` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSchedule <a name="CloudBackupSchedule" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedule(
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
  auto_export_enabled: typing.Union[bool, IResolvable] = None,
  copy_settings: typing.Union[IResolvable, typing.List[CloudBackupScheduleCopySettings]] = None,
  export: CloudBackupScheduleExport = None,
  id: str = None,
  policy_item_daily: CloudBackupSchedulePolicyItemDaily = None,
  policy_item_hourly: CloudBackupSchedulePolicyItemHourly = None,
  policy_item_monthly: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemMonthly]] = None,
  policy_item_weekly: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemWeekly]] = None,
  reference_hour_of_day: typing.Union[int, float] = None,
  reference_minute_of_hour: typing.Union[int, float] = None,
  restore_window_days: typing.Union[int, float] = None,
  update_snapshots: typing.Union[bool, IResolvable] = None,
  use_org_and_group_names_in_export_prefix: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.autoExportEnabled">auto_export_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.copySettings">copy_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]</code> | copy_settings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.export">export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | export block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemDaily">policy_item_daily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemHourly">policy_item_hourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemMonthly">policy_item_monthly</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemWeekly">policy_item_weekly</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]</code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceHourOfDay">reference_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceMinuteOfHour">reference_minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.restoreWindowDays">restore_window_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.updateSnapshots">update_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.useOrgAndGroupNamesInExportPrefix">use_org_and_group_names_in_export_prefix</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}.

---

##### `auto_export_enabled`<sup>Optional</sup> <a name="auto_export_enabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.autoExportEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}.

---

##### `copy_settings`<sup>Optional</sup> <a name="copy_settings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.copySettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]

copy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#copy_settings CloudBackupSchedule#copy_settings}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.export"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#export CloudBackupSchedule#export}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_item_daily`<sup>Optional</sup> <a name="policy_item_daily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemDaily"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_daily CloudBackupSchedule#policy_item_daily}

---

##### `policy_item_hourly`<sup>Optional</sup> <a name="policy_item_hourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemHourly"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_hourly CloudBackupSchedule#policy_item_hourly}

---

##### `policy_item_monthly`<sup>Optional</sup> <a name="policy_item_monthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemMonthly"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_monthly CloudBackupSchedule#policy_item_monthly}

---

##### `policy_item_weekly`<sup>Optional</sup> <a name="policy_item_weekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemWeekly"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_weekly CloudBackupSchedule#policy_item_weekly}

---

##### `reference_hour_of_day`<sup>Optional</sup> <a name="reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceHourOfDay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}.

---

##### `reference_minute_of_hour`<sup>Optional</sup> <a name="reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceMinuteOfHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}.

---

##### `restore_window_days`<sup>Optional</sup> <a name="restore_window_days" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.restoreWindowDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}.

---

##### `update_snapshots`<sup>Optional</sup> <a name="update_snapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.updateSnapshots"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}.

---

##### `use_org_and_group_names_in_export_prefix`<sup>Optional</sup> <a name="use_org_and_group_names_in_export_prefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.useOrgAndGroupNamesInExportPrefix"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings">put_copy_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport">put_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily">put_policy_item_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly">put_policy_item_hourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly">put_policy_item_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly">put_policy_item_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetAutoExportEnabled">reset_auto_export_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetCopySettings">reset_copy_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetExport">reset_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemDaily">reset_policy_item_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemHourly">reset_policy_item_hourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemMonthly">reset_policy_item_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemWeekly">reset_policy_item_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceHourOfDay">reset_reference_hour_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceMinuteOfHour">reset_reference_minute_of_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetRestoreWindowDays">reset_restore_window_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUpdateSnapshots">reset_update_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUseOrgAndGroupNamesInExportPrefix">reset_use_org_and_group_names_in_export_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_copy_settings` <a name="put_copy_settings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings"></a>

```python
def put_copy_settings(
  value: typing.Union[IResolvable, typing.List[CloudBackupScheduleCopySettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]

---

##### `put_export` <a name="put_export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport"></a>

```python
def put_export(
  export_bucket_id: str = None,
  frequency_type: str = None
) -> None
```

###### `export_bucket_id`<sup>Optional</sup> <a name="export_bucket_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport.parameter.exportBucketId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}.

---

###### `frequency_type`<sup>Optional</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport.parameter.frequencyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}.

---

##### `put_policy_item_daily` <a name="put_policy_item_daily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily"></a>

```python
def put_policy_item_daily(
  frequency_interval: typing.Union[int, float],
  retention_unit: str,
  retention_value: typing.Union[int, float]
) -> None
```

###### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily.parameter.frequencyInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

###### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily.parameter.retentionUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

###### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily.parameter.retentionValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

##### `put_policy_item_hourly` <a name="put_policy_item_hourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly"></a>

```python
def put_policy_item_hourly(
  frequency_interval: typing.Union[int, float],
  retention_unit: str,
  retention_value: typing.Union[int, float]
) -> None
```

###### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly.parameter.frequencyInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

###### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly.parameter.retentionUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

###### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly.parameter.retentionValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

##### `put_policy_item_monthly` <a name="put_policy_item_monthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly"></a>

```python
def put_policy_item_monthly(
  value: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemMonthly]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]

---

##### `put_policy_item_weekly` <a name="put_policy_item_weekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly"></a>

```python
def put_policy_item_weekly(
  value: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemWeekly]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]

---

##### `reset_auto_export_enabled` <a name="reset_auto_export_enabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetAutoExportEnabled"></a>

```python
def reset_auto_export_enabled() -> None
```

##### `reset_copy_settings` <a name="reset_copy_settings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetCopySettings"></a>

```python
def reset_copy_settings() -> None
```

##### `reset_export` <a name="reset_export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetExport"></a>

```python
def reset_export() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_item_daily` <a name="reset_policy_item_daily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemDaily"></a>

```python
def reset_policy_item_daily() -> None
```

##### `reset_policy_item_hourly` <a name="reset_policy_item_hourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemHourly"></a>

```python
def reset_policy_item_hourly() -> None
```

##### `reset_policy_item_monthly` <a name="reset_policy_item_monthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemMonthly"></a>

```python
def reset_policy_item_monthly() -> None
```

##### `reset_policy_item_weekly` <a name="reset_policy_item_weekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemWeekly"></a>

```python
def reset_policy_item_weekly() -> None
```

##### `reset_reference_hour_of_day` <a name="reset_reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceHourOfDay"></a>

```python
def reset_reference_hour_of_day() -> None
```

##### `reset_reference_minute_of_hour` <a name="reset_reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceMinuteOfHour"></a>

```python
def reset_reference_minute_of_hour() -> None
```

##### `reset_restore_window_days` <a name="reset_restore_window_days" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetRestoreWindowDays"></a>

```python
def reset_restore_window_days() -> None
```

##### `reset_update_snapshots` <a name="reset_update_snapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUpdateSnapshots"></a>

```python
def reset_update_snapshots() -> None
```

##### `reset_use_org_and_group_names_in_export_prefix` <a name="reset_use_org_and_group_names_in_export_prefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUseOrgAndGroupNamesInExportPrefix"></a>

```python
def reset_use_org_and_group_names_in_export_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudBackupSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettings">copy_settings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList">CloudBackupScheduleCopySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.export">export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference">CloudBackupScheduleExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idPolicy">id_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.nextSnapshot">next_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDaily">policy_item_daily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference">CloudBackupSchedulePolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourly">policy_item_hourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference">CloudBackupSchedulePolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthly">policy_item_monthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList">CloudBackupSchedulePolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeekly">policy_item_weekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList">CloudBackupSchedulePolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabledInput">auto_export_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettingsInput">copy_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.exportInput">export_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDailyInput">policy_item_daily_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourlyInput">policy_item_hourly_input</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthlyInput">policy_item_monthly_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeeklyInput">policy_item_weekly_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDayInput">reference_hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHourInput">reference_minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDaysInput">restore_window_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshotsInput">update_snapshots_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefixInput">use_org_and_group_names_in_export_prefix_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabled">auto_export_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDay">reference_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHour">reference_minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDays">restore_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshots">update_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefix">use_org_and_group_names_in_export_prefix</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `copy_settings`<sup>Required</sup> <a name="copy_settings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettings"></a>

```python
copy_settings: CloudBackupScheduleCopySettingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList">CloudBackupScheduleCopySettingsList</a>

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.export"></a>

```python
export: CloudBackupScheduleExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference">CloudBackupScheduleExportOutputReference</a>

---

##### `id_policy`<sup>Required</sup> <a name="id_policy" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idPolicy"></a>

```python
id_policy: str
```

- *Type:* str

---

##### `next_snapshot`<sup>Required</sup> <a name="next_snapshot" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.nextSnapshot"></a>

```python
next_snapshot: str
```

- *Type:* str

---

##### `policy_item_daily`<sup>Required</sup> <a name="policy_item_daily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDaily"></a>

```python
policy_item_daily: CloudBackupSchedulePolicyItemDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference">CloudBackupSchedulePolicyItemDailyOutputReference</a>

---

##### `policy_item_hourly`<sup>Required</sup> <a name="policy_item_hourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourly"></a>

```python
policy_item_hourly: CloudBackupSchedulePolicyItemHourlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference">CloudBackupSchedulePolicyItemHourlyOutputReference</a>

---

##### `policy_item_monthly`<sup>Required</sup> <a name="policy_item_monthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthly"></a>

```python
policy_item_monthly: CloudBackupSchedulePolicyItemMonthlyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList">CloudBackupSchedulePolicyItemMonthlyList</a>

---

##### `policy_item_weekly`<sup>Required</sup> <a name="policy_item_weekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeekly"></a>

```python
policy_item_weekly: CloudBackupSchedulePolicyItemWeeklyList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList">CloudBackupSchedulePolicyItemWeeklyList</a>

---

##### `auto_export_enabled_input`<sup>Optional</sup> <a name="auto_export_enabled_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabledInput"></a>

```python
auto_export_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `copy_settings_input`<sup>Optional</sup> <a name="copy_settings_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettingsInput"></a>

```python
copy_settings_input: typing.Union[IResolvable, typing.List[CloudBackupScheduleCopySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]

---

##### `export_input`<sup>Optional</sup> <a name="export_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.exportInput"></a>

```python
export_input: CloudBackupScheduleExport
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_item_daily_input`<sup>Optional</sup> <a name="policy_item_daily_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDailyInput"></a>

```python
policy_item_daily_input: CloudBackupSchedulePolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---

##### `policy_item_hourly_input`<sup>Optional</sup> <a name="policy_item_hourly_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourlyInput"></a>

```python
policy_item_hourly_input: CloudBackupSchedulePolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---

##### `policy_item_monthly_input`<sup>Optional</sup> <a name="policy_item_monthly_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthlyInput"></a>

```python
policy_item_monthly_input: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]

---

##### `policy_item_weekly_input`<sup>Optional</sup> <a name="policy_item_weekly_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeeklyInput"></a>

```python
policy_item_weekly_input: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemWeekly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `reference_hour_of_day_input`<sup>Optional</sup> <a name="reference_hour_of_day_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDayInput"></a>

```python
reference_hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reference_minute_of_hour_input`<sup>Optional</sup> <a name="reference_minute_of_hour_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHourInput"></a>

```python
reference_minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `restore_window_days_input`<sup>Optional</sup> <a name="restore_window_days_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDaysInput"></a>

```python
restore_window_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_snapshots_input`<sup>Optional</sup> <a name="update_snapshots_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshotsInput"></a>

```python
update_snapshots_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_org_and_group_names_in_export_prefix_input`<sup>Optional</sup> <a name="use_org_and_group_names_in_export_prefix_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefixInput"></a>

```python
use_org_and_group_names_in_export_prefix_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_export_enabled`<sup>Required</sup> <a name="auto_export_enabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabled"></a>

```python
auto_export_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `reference_hour_of_day`<sup>Required</sup> <a name="reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDay"></a>

```python
reference_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reference_minute_of_hour`<sup>Required</sup> <a name="reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHour"></a>

```python
reference_minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `restore_window_days`<sup>Required</sup> <a name="restore_window_days" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDays"></a>

```python
restore_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_snapshots`<sup>Required</sup> <a name="update_snapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshots"></a>

```python
update_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_org_and_group_names_in_export_prefix`<sup>Required</sup> <a name="use_org_and_group_names_in_export_prefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefix"></a>

```python
use_org_and_group_names_in_export_prefix: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupScheduleConfig <a name="CloudBackupScheduleConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  project_id: str,
  auto_export_enabled: typing.Union[bool, IResolvable] = None,
  copy_settings: typing.Union[IResolvable, typing.List[CloudBackupScheduleCopySettings]] = None,
  export: CloudBackupScheduleExport = None,
  id: str = None,
  policy_item_daily: CloudBackupSchedulePolicyItemDaily = None,
  policy_item_hourly: CloudBackupSchedulePolicyItemHourly = None,
  policy_item_monthly: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemMonthly]] = None,
  policy_item_weekly: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemWeekly]] = None,
  reference_hour_of_day: typing.Union[int, float] = None,
  reference_minute_of_hour: typing.Union[int, float] = None,
  restore_window_days: typing.Union[int, float] = None,
  update_snapshots: typing.Union[bool, IResolvable] = None,
  use_org_and_group_names_in_export_prefix: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.autoExportEnabled">auto_export_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.copySettings">copy_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]</code> | copy_settings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.export">export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | export block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemDaily">policy_item_daily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemHourly">policy_item_hourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemMonthly">policy_item_monthly</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemWeekly">policy_item_weekly</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]</code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceHourOfDay">reference_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceMinuteOfHour">reference_minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.restoreWindowDays">restore_window_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.updateSnapshots">update_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.useOrgAndGroupNamesInExportPrefix">use_org_and_group_names_in_export_prefix</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}.

---

##### `auto_export_enabled`<sup>Optional</sup> <a name="auto_export_enabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.autoExportEnabled"></a>

```python
auto_export_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}.

---

##### `copy_settings`<sup>Optional</sup> <a name="copy_settings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.copySettings"></a>

```python
copy_settings: typing.Union[IResolvable, typing.List[CloudBackupScheduleCopySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]

copy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#copy_settings CloudBackupSchedule#copy_settings}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.export"></a>

```python
export: CloudBackupScheduleExport
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#export CloudBackupSchedule#export}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_item_daily`<sup>Optional</sup> <a name="policy_item_daily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemDaily"></a>

```python
policy_item_daily: CloudBackupSchedulePolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_daily CloudBackupSchedule#policy_item_daily}

---

##### `policy_item_hourly`<sup>Optional</sup> <a name="policy_item_hourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemHourly"></a>

```python
policy_item_hourly: CloudBackupSchedulePolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_hourly CloudBackupSchedule#policy_item_hourly}

---

##### `policy_item_monthly`<sup>Optional</sup> <a name="policy_item_monthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemMonthly"></a>

```python
policy_item_monthly: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_monthly CloudBackupSchedule#policy_item_monthly}

---

##### `policy_item_weekly`<sup>Optional</sup> <a name="policy_item_weekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemWeekly"></a>

```python
policy_item_weekly: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemWeekly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#policy_item_weekly CloudBackupSchedule#policy_item_weekly}

---

##### `reference_hour_of_day`<sup>Optional</sup> <a name="reference_hour_of_day" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceHourOfDay"></a>

```python
reference_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}.

---

##### `reference_minute_of_hour`<sup>Optional</sup> <a name="reference_minute_of_hour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceMinuteOfHour"></a>

```python
reference_minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}.

---

##### `restore_window_days`<sup>Optional</sup> <a name="restore_window_days" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.restoreWindowDays"></a>

```python
restore_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}.

---

##### `update_snapshots`<sup>Optional</sup> <a name="update_snapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.updateSnapshots"></a>

```python
update_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}.

---

##### `use_org_and_group_names_in_export_prefix`<sup>Optional</sup> <a name="use_org_and_group_names_in_export_prefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.useOrgAndGroupNamesInExportPrefix"></a>

```python
use_org_and_group_names_in_export_prefix: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}.

---

### CloudBackupScheduleCopySettings <a name="CloudBackupScheduleCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupScheduleCopySettings(
  cloud_provider: str = None,
  frequencies: typing.List[str] = None,
  region_name: str = None,
  replication_spec_id: str = None,
  should_copy_oplogs: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.frequencies">frequencies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.regionName">region_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.replicationSpecId">replication_spec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.shouldCopyOplogs">should_copy_oplogs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}. |

---

##### `cloud_provider`<sup>Optional</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}.

---

##### `frequencies`<sup>Optional</sup> <a name="frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.frequencies"></a>

```python
frequencies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}.

---

##### `region_name`<sup>Optional</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}.

---

##### `replication_spec_id`<sup>Optional</sup> <a name="replication_spec_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.replicationSpecId"></a>

```python
replication_spec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}.

---

##### `should_copy_oplogs`<sup>Optional</sup> <a name="should_copy_oplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.shouldCopyOplogs"></a>

```python
should_copy_oplogs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}.

---

### CloudBackupScheduleExport <a name="CloudBackupScheduleExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupScheduleExport(
  export_bucket_id: str = None,
  frequency_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.exportBucketId">export_bucket_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.frequencyType">frequency_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}. |

---

##### `export_bucket_id`<sup>Optional</sup> <a name="export_bucket_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.exportBucketId"></a>

```python
export_bucket_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}.

---

##### `frequency_type`<sup>Optional</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}.

---

### CloudBackupSchedulePolicyItemDaily <a name="CloudBackupSchedulePolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily(
  frequency_interval: typing.Union[int, float],
  retention_unit: str,
  retention_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionUnit">retention_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemHourly <a name="CloudBackupSchedulePolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly(
  frequency_interval: typing.Union[int, float],
  retention_unit: str,
  retention_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionUnit">retention_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemMonthly <a name="CloudBackupSchedulePolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly(
  frequency_interval: typing.Union[int, float],
  retention_unit: str,
  retention_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionUnit">retention_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemWeekly <a name="CloudBackupSchedulePolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly(
  frequency_interval: typing.Union[int, float],
  retention_unit: str,
  retention_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionUnit">retention_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupScheduleCopySettingsList <a name="CloudBackupScheduleCopySettingsList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupScheduleCopySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBackupScheduleCopySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBackupScheduleCopySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]]

---


### CloudBackupScheduleCopySettingsOutputReference <a name="CloudBackupScheduleCopySettingsOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetCloudProvider">reset_cloud_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetFrequencies">reset_frequencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetRegionName">reset_region_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetReplicationSpecId">reset_replication_spec_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetShouldCopyOplogs">reset_should_copy_oplogs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_provider` <a name="reset_cloud_provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetCloudProvider"></a>

```python
def reset_cloud_provider() -> None
```

##### `reset_frequencies` <a name="reset_frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetFrequencies"></a>

```python
def reset_frequencies() -> None
```

##### `reset_region_name` <a name="reset_region_name" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetRegionName"></a>

```python
def reset_region_name() -> None
```

##### `reset_replication_spec_id` <a name="reset_replication_spec_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetReplicationSpecId"></a>

```python
def reset_replication_spec_id() -> None
```

##### `reset_should_copy_oplogs` <a name="reset_should_copy_oplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetShouldCopyOplogs"></a>

```python
def reset_should_copy_oplogs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProviderInput">cloud_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequenciesInput">frequencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecIdInput">replication_spec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogsInput">should_copy_oplogs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequencies">frequencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecId">replication_spec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogs">should_copy_oplogs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProviderInput"></a>

```python
cloud_provider_input: str
```

- *Type:* str

---

##### `frequencies_input`<sup>Optional</sup> <a name="frequencies_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequenciesInput"></a>

```python
frequencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `replication_spec_id_input`<sup>Optional</sup> <a name="replication_spec_id_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecIdInput"></a>

```python
replication_spec_id_input: str
```

- *Type:* str

---

##### `should_copy_oplogs_input`<sup>Optional</sup> <a name="should_copy_oplogs_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogsInput"></a>

```python
should_copy_oplogs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `frequencies`<sup>Required</sup> <a name="frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequencies"></a>

```python
frequencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `replication_spec_id`<sup>Required</sup> <a name="replication_spec_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecId"></a>

```python
replication_spec_id: str
```

- *Type:* str

---

##### `should_copy_oplogs`<sup>Required</sup> <a name="should_copy_oplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogs"></a>

```python
should_copy_oplogs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBackupScheduleCopySettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>]

---


### CloudBackupScheduleExportOutputReference <a name="CloudBackupScheduleExportOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupScheduleExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetExportBucketId">reset_export_bucket_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetFrequencyType">reset_frequency_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_bucket_id` <a name="reset_export_bucket_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetExportBucketId"></a>

```python
def reset_export_bucket_id() -> None
```

##### `reset_frequency_type` <a name="reset_frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetFrequencyType"></a>

```python
def reset_frequency_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketIdInput">export_bucket_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyTypeInput">frequency_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketId">export_bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_bucket_id_input`<sup>Optional</sup> <a name="export_bucket_id_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketIdInput"></a>

```python
export_bucket_id_input: str
```

- *Type:* str

---

##### `frequency_type_input`<sup>Optional</sup> <a name="frequency_type_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyTypeInput"></a>

```python
frequency_type_input: str
```

- *Type:* str

---

##### `export_bucket_id`<sup>Required</sup> <a name="export_bucket_id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketId"></a>

```python
export_bucket_id: str
```

- *Type:* str

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.internalValue"></a>

```python
internal_value: CloudBackupScheduleExport
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---


### CloudBackupSchedulePolicyItemDailyOutputReference <a name="CloudBackupSchedulePolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnitInput">retention_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValueInput">retention_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit_input`<sup>Optional</sup> <a name="retention_unit_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```python
retention_unit_input: str
```

- *Type:* str

---

##### `retention_value_input`<sup>Optional</sup> <a name="retention_value_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValueInput"></a>

```python
retention_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.internalValue"></a>

```python
internal_value: CloudBackupSchedulePolicyItemDaily
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---


### CloudBackupSchedulePolicyItemHourlyOutputReference <a name="CloudBackupSchedulePolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnitInput">retention_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValueInput">retention_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit_input`<sup>Optional</sup> <a name="retention_unit_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```python
retention_unit_input: str
```

- *Type:* str

---

##### `retention_value_input`<sup>Optional</sup> <a name="retention_value_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```python
retention_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.internalValue"></a>

```python
internal_value: CloudBackupSchedulePolicyItemHourly
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---


### CloudBackupSchedulePolicyItemMonthlyList <a name="CloudBackupSchedulePolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBackupSchedulePolicyItemMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]]

---


### CloudBackupSchedulePolicyItemMonthlyOutputReference <a name="CloudBackupSchedulePolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnitInput">retention_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValueInput">retention_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit_input`<sup>Optional</sup> <a name="retention_unit_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```python
retention_unit_input: str
```

- *Type:* str

---

##### `retention_value_input`<sup>Optional</sup> <a name="retention_value_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```python
retention_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBackupSchedulePolicyItemMonthly]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>]

---


### CloudBackupSchedulePolicyItemWeeklyList <a name="CloudBackupSchedulePolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBackupSchedulePolicyItemWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBackupSchedulePolicyItemWeekly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]]

---


### CloudBackupSchedulePolicyItemWeeklyOutputReference <a name="CloudBackupSchedulePolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import cloud_backup_schedule

cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyType">frequency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnitInput">retention_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValueInput">retention_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValue">retention_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_type`<sup>Required</sup> <a name="frequency_type" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyType"></a>

```python
frequency_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit_input`<sup>Optional</sup> <a name="retention_unit_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```python
retention_unit_input: str
```

- *Type:* str

---

##### `retention_value_input`<sup>Optional</sup> <a name="retention_value_input" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```python
retention_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `retention_value`<sup>Required</sup> <a name="retention_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValue"></a>

```python
retention_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBackupSchedulePolicyItemWeekly]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>]

---



