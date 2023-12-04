# `cloudBackupSchedule` Submodule <a name="`cloudBackupSchedule` Submodule" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBackupSchedule <a name="CloudBackupSchedule" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedule;

CloudBackupSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .autoExportEnabled(java.lang.Boolean)
//  .autoExportEnabled(IResolvable)
//  .copySettings(IResolvable)
//  .copySettings(java.util.List<CloudBackupScheduleCopySettings>)
//  .export(CloudBackupScheduleExport)
//  .id(java.lang.String)
//  .policyItemDaily(CloudBackupSchedulePolicyItemDaily)
//  .policyItemHourly(CloudBackupSchedulePolicyItemHourly)
//  .policyItemMonthly(IResolvable)
//  .policyItemMonthly(java.util.List<CloudBackupSchedulePolicyItemMonthly>)
//  .policyItemWeekly(IResolvable)
//  .policyItemWeekly(java.util.List<CloudBackupSchedulePolicyItemWeekly>)
//  .referenceHourOfDay(java.lang.Number)
//  .referenceMinuteOfHour(java.lang.Number)
//  .restoreWindowDays(java.lang.Number)
//  .updateSnapshots(java.lang.Boolean)
//  .updateSnapshots(IResolvable)
//  .useOrgAndGroupNamesInExportPrefix(java.lang.Boolean)
//  .useOrgAndGroupNamesInExportPrefix(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.autoExportEnabled">autoExportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.copySettings">copySettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>></code> | copy_settings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.export">export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | export block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemMonthly">policyItemMonthly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>></code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemWeekly">policyItemWeekly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>></code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.updateSnapshots">updateSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.useOrgAndGroupNamesInExportPrefix">useOrgAndGroupNamesInExportPrefix</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}.

---

##### `autoExportEnabled`<sup>Optional</sup> <a name="autoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.autoExportEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}.

---

##### `copySettings`<sup>Optional</sup> <a name="copySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.copySettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>>

copy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#copy_settings CloudBackupSchedule#copy_settings}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.export"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#export CloudBackupSchedule#export}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyItemDaily`<sup>Optional</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemDaily"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_daily CloudBackupSchedule#policy_item_daily}

---

##### `policyItemHourly`<sup>Optional</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemHourly"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_hourly CloudBackupSchedule#policy_item_hourly}

---

##### `policyItemMonthly`<sup>Optional</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemMonthly"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>>

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_monthly CloudBackupSchedule#policy_item_monthly}

---

##### `policyItemWeekly`<sup>Optional</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.policyItemWeekly"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>>

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_weekly CloudBackupSchedule#policy_item_weekly}

---

##### `referenceHourOfDay`<sup>Optional</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceHourOfDay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}.

---

##### `referenceMinuteOfHour`<sup>Optional</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.referenceMinuteOfHour"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}.

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.restoreWindowDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}.

---

##### `updateSnapshots`<sup>Optional</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.updateSnapshots"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}.

---

##### `useOrgAndGroupNamesInExportPrefix`<sup>Optional</sup> <a name="useOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.Initializer.parameter.useOrgAndGroupNamesInExportPrefix"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings">putCopySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport">putExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily">putPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly">putPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly">putPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly">putPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetAutoExportEnabled">resetAutoExportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetCopySettings">resetCopySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetExport">resetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemDaily">resetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemHourly">resetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemMonthly">resetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemWeekly">resetPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceHourOfDay">resetReferenceHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceMinuteOfHour">resetReferenceMinuteOfHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetRestoreWindowDays">resetRestoreWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUpdateSnapshots">resetUpdateSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUseOrgAndGroupNamesInExportPrefix">resetUseOrgAndGroupNamesInExportPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCopySettings` <a name="putCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings"></a>

```java
public void putCopySettings(IResolvable OR java.util.List<CloudBackupScheduleCopySettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putCopySettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>>

---

##### `putExport` <a name="putExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport"></a>

```java
public void putExport(CloudBackupScheduleExport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---

##### `putPolicyItemDaily` <a name="putPolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily"></a>

```java
public void putPolicyItemDaily(CloudBackupSchedulePolicyItemDaily value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---

##### `putPolicyItemHourly` <a name="putPolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly"></a>

```java
public void putPolicyItemHourly(CloudBackupSchedulePolicyItemHourly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---

##### `putPolicyItemMonthly` <a name="putPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly"></a>

```java
public void putPolicyItemMonthly(IResolvable OR java.util.List<CloudBackupSchedulePolicyItemMonthly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemMonthly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>>

---

##### `putPolicyItemWeekly` <a name="putPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly"></a>

```java
public void putPolicyItemWeekly(IResolvable OR java.util.List<CloudBackupSchedulePolicyItemWeekly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.putPolicyItemWeekly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>>

---

##### `resetAutoExportEnabled` <a name="resetAutoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetAutoExportEnabled"></a>

```java
public void resetAutoExportEnabled()
```

##### `resetCopySettings` <a name="resetCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetCopySettings"></a>

```java
public void resetCopySettings()
```

##### `resetExport` <a name="resetExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetExport"></a>

```java
public void resetExport()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyItemDaily` <a name="resetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemDaily"></a>

```java
public void resetPolicyItemDaily()
```

##### `resetPolicyItemHourly` <a name="resetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemHourly"></a>

```java
public void resetPolicyItemHourly()
```

##### `resetPolicyItemMonthly` <a name="resetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemMonthly"></a>

```java
public void resetPolicyItemMonthly()
```

##### `resetPolicyItemWeekly` <a name="resetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetPolicyItemWeekly"></a>

```java
public void resetPolicyItemWeekly()
```

##### `resetReferenceHourOfDay` <a name="resetReferenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceHourOfDay"></a>

```java
public void resetReferenceHourOfDay()
```

##### `resetReferenceMinuteOfHour` <a name="resetReferenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetReferenceMinuteOfHour"></a>

```java
public void resetReferenceMinuteOfHour()
```

##### `resetRestoreWindowDays` <a name="resetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetRestoreWindowDays"></a>

```java
public void resetRestoreWindowDays()
```

##### `resetUpdateSnapshots` <a name="resetUpdateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUpdateSnapshots"></a>

```java
public void resetUpdateSnapshots()
```

##### `resetUseOrgAndGroupNamesInExportPrefix` <a name="resetUseOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.resetUseOrgAndGroupNamesInExportPrefix"></a>

```java
public void resetUseOrgAndGroupNamesInExportPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedule;

CloudBackupSchedule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedule;

CloudBackupSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedule;

CloudBackupSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedule;

CloudBackupSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudBackupSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettings">copySettings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList">CloudBackupScheduleCopySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.export">export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference">CloudBackupScheduleExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idPolicy">idPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.nextSnapshot">nextSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference">CloudBackupSchedulePolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference">CloudBackupSchedulePolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthly">policyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList">CloudBackupSchedulePolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeekly">policyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList">CloudBackupSchedulePolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabledInput">autoExportEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettingsInput">copySettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.exportInput">exportInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDailyInput">policyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourlyInput">policyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthlyInput">policyItemMonthlyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeeklyInput">policyItemWeeklyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDayInput">referenceHourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHourInput">referenceMinuteOfHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDaysInput">restoreWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshotsInput">updateSnapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefixInput">useOrgAndGroupNamesInExportPrefixInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabled">autoExportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshots">updateSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefix">useOrgAndGroupNamesInExportPrefix</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `copySettings`<sup>Required</sup> <a name="copySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettings"></a>

```java
public CloudBackupScheduleCopySettingsList getCopySettings();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList">CloudBackupScheduleCopySettingsList</a>

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.export"></a>

```java
public CloudBackupScheduleExportOutputReference getExport();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference">CloudBackupScheduleExportOutputReference</a>

---

##### `idPolicy`<sup>Required</sup> <a name="idPolicy" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idPolicy"></a>

```java
public java.lang.String getIdPolicy();
```

- *Type:* java.lang.String

---

##### `nextSnapshot`<sup>Required</sup> <a name="nextSnapshot" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.nextSnapshot"></a>

```java
public java.lang.String getNextSnapshot();
```

- *Type:* java.lang.String

---

##### `policyItemDaily`<sup>Required</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDaily"></a>

```java
public CloudBackupSchedulePolicyItemDailyOutputReference getPolicyItemDaily();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference">CloudBackupSchedulePolicyItemDailyOutputReference</a>

---

##### `policyItemHourly`<sup>Required</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourly"></a>

```java
public CloudBackupSchedulePolicyItemHourlyOutputReference getPolicyItemHourly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference">CloudBackupSchedulePolicyItemHourlyOutputReference</a>

---

##### `policyItemMonthly`<sup>Required</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthly"></a>

```java
public CloudBackupSchedulePolicyItemMonthlyList getPolicyItemMonthly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList">CloudBackupSchedulePolicyItemMonthlyList</a>

---

##### `policyItemWeekly`<sup>Required</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeekly"></a>

```java
public CloudBackupSchedulePolicyItemWeeklyList getPolicyItemWeekly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList">CloudBackupSchedulePolicyItemWeeklyList</a>

---

##### `autoExportEnabledInput`<sup>Optional</sup> <a name="autoExportEnabledInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabledInput"></a>

```java
public java.lang.Object getAutoExportEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `copySettingsInput`<sup>Optional</sup> <a name="copySettingsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.copySettingsInput"></a>

```java
public java.lang.Object getCopySettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>>

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.exportInput"></a>

```java
public CloudBackupScheduleExport getExportInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyItemDailyInput`<sup>Optional</sup> <a name="policyItemDailyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemDailyInput"></a>

```java
public CloudBackupSchedulePolicyItemDaily getPolicyItemDailyInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---

##### `policyItemHourlyInput`<sup>Optional</sup> <a name="policyItemHourlyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemHourlyInput"></a>

```java
public CloudBackupSchedulePolicyItemHourly getPolicyItemHourlyInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---

##### `policyItemMonthlyInput`<sup>Optional</sup> <a name="policyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemMonthlyInput"></a>

```java
public java.lang.Object getPolicyItemMonthlyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>>

---

##### `policyItemWeeklyInput`<sup>Optional</sup> <a name="policyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.policyItemWeeklyInput"></a>

```java
public java.lang.Object getPolicyItemWeeklyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `referenceHourOfDayInput`<sup>Optional</sup> <a name="referenceHourOfDayInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDayInput"></a>

```java
public java.lang.Number getReferenceHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `referenceMinuteOfHourInput`<sup>Optional</sup> <a name="referenceMinuteOfHourInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHourInput"></a>

```java
public java.lang.Number getReferenceMinuteOfHourInput();
```

- *Type:* java.lang.Number

---

##### `restoreWindowDaysInput`<sup>Optional</sup> <a name="restoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDaysInput"></a>

```java
public java.lang.Number getRestoreWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `updateSnapshotsInput`<sup>Optional</sup> <a name="updateSnapshotsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshotsInput"></a>

```java
public java.lang.Object getUpdateSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOrgAndGroupNamesInExportPrefixInput`<sup>Optional</sup> <a name="useOrgAndGroupNamesInExportPrefixInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefixInput"></a>

```java
public java.lang.Object getUseOrgAndGroupNamesInExportPrefixInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoExportEnabled`<sup>Required</sup> <a name="autoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.autoExportEnabled"></a>

```java
public java.lang.Object getAutoExportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `referenceHourOfDay`<sup>Required</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceHourOfDay"></a>

```java
public java.lang.Number getReferenceHourOfDay();
```

- *Type:* java.lang.Number

---

##### `referenceMinuteOfHour`<sup>Required</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.referenceMinuteOfHour"></a>

```java
public java.lang.Number getReferenceMinuteOfHour();
```

- *Type:* java.lang.Number

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

---

##### `updateSnapshots`<sup>Required</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.updateSnapshots"></a>

```java
public java.lang.Object getUpdateSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOrgAndGroupNamesInExportPrefix`<sup>Required</sup> <a name="useOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.useOrgAndGroupNamesInExportPrefix"></a>

```java
public java.lang.Object getUseOrgAndGroupNamesInExportPrefix();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBackupScheduleConfig <a name="CloudBackupScheduleConfig" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupScheduleConfig;

CloudBackupScheduleConfig.builder()
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
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .autoExportEnabled(java.lang.Boolean)
//  .autoExportEnabled(IResolvable)
//  .copySettings(IResolvable)
//  .copySettings(java.util.List<CloudBackupScheduleCopySettings>)
//  .export(CloudBackupScheduleExport)
//  .id(java.lang.String)
//  .policyItemDaily(CloudBackupSchedulePolicyItemDaily)
//  .policyItemHourly(CloudBackupSchedulePolicyItemHourly)
//  .policyItemMonthly(IResolvable)
//  .policyItemMonthly(java.util.List<CloudBackupSchedulePolicyItemMonthly>)
//  .policyItemWeekly(IResolvable)
//  .policyItemWeekly(java.util.List<CloudBackupSchedulePolicyItemWeekly>)
//  .referenceHourOfDay(java.lang.Number)
//  .referenceMinuteOfHour(java.lang.Number)
//  .restoreWindowDays(java.lang.Number)
//  .updateSnapshots(java.lang.Boolean)
//  .updateSnapshots(IResolvable)
//  .useOrgAndGroupNamesInExportPrefix(java.lang.Boolean)
//  .useOrgAndGroupNamesInExportPrefix(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.autoExportEnabled">autoExportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.copySettings">copySettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>></code> | copy_settings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.export">export</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | export block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemMonthly">policyItemMonthly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>></code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemWeekly">policyItemWeekly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>></code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceHourOfDay">referenceHourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceMinuteOfHour">referenceMinuteOfHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.updateSnapshots">updateSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.useOrgAndGroupNamesInExportPrefix">useOrgAndGroupNamesInExportPrefix</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}.

---

##### `autoExportEnabled`<sup>Optional</sup> <a name="autoExportEnabled" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.autoExportEnabled"></a>

```java
public java.lang.Object getAutoExportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}.

---

##### `copySettings`<sup>Optional</sup> <a name="copySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.copySettings"></a>

```java
public java.lang.Object getCopySettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>>

copy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#copy_settings CloudBackupSchedule#copy_settings}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.export"></a>

```java
public CloudBackupScheduleExport getExport();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#export CloudBackupSchedule#export}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyItemDaily`<sup>Optional</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemDaily"></a>

```java
public CloudBackupSchedulePolicyItemDaily getPolicyItemDaily();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_daily CloudBackupSchedule#policy_item_daily}

---

##### `policyItemHourly`<sup>Optional</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemHourly"></a>

```java
public CloudBackupSchedulePolicyItemHourly getPolicyItemHourly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_hourly CloudBackupSchedule#policy_item_hourly}

---

##### `policyItemMonthly`<sup>Optional</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemMonthly"></a>

```java
public java.lang.Object getPolicyItemMonthly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>>

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_monthly CloudBackupSchedule#policy_item_monthly}

---

##### `policyItemWeekly`<sup>Optional</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.policyItemWeekly"></a>

```java
public java.lang.Object getPolicyItemWeekly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>>

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#policy_item_weekly CloudBackupSchedule#policy_item_weekly}

---

##### `referenceHourOfDay`<sup>Optional</sup> <a name="referenceHourOfDay" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceHourOfDay"></a>

```java
public java.lang.Number getReferenceHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}.

---

##### `referenceMinuteOfHour`<sup>Optional</sup> <a name="referenceMinuteOfHour" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.referenceMinuteOfHour"></a>

```java
public java.lang.Number getReferenceMinuteOfHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}.

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}.

---

##### `updateSnapshots`<sup>Optional</sup> <a name="updateSnapshots" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.updateSnapshots"></a>

```java
public java.lang.Object getUpdateSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}.

---

##### `useOrgAndGroupNamesInExportPrefix`<sup>Optional</sup> <a name="useOrgAndGroupNamesInExportPrefix" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleConfig.property.useOrgAndGroupNamesInExportPrefix"></a>

```java
public java.lang.Object getUseOrgAndGroupNamesInExportPrefix();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}.

---

### CloudBackupScheduleCopySettings <a name="CloudBackupScheduleCopySettings" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupScheduleCopySettings;

CloudBackupScheduleCopySettings.builder()
//  .cloudProvider(java.lang.String)
//  .frequencies(java.util.List<java.lang.String>)
//  .regionName(java.lang.String)
//  .replicationSpecId(java.lang.String)
//  .shouldCopyOplogs(java.lang.Boolean)
//  .shouldCopyOplogs(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.frequencies">frequencies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.replicationSpecId">replicationSpecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.shouldCopyOplogs">shouldCopyOplogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}. |

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}.

---

##### `frequencies`<sup>Optional</sup> <a name="frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.frequencies"></a>

```java
public java.util.List<java.lang.String> getFrequencies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}.

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}.

---

##### `replicationSpecId`<sup>Optional</sup> <a name="replicationSpecId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.replicationSpecId"></a>

```java
public java.lang.String getReplicationSpecId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}.

---

##### `shouldCopyOplogs`<sup>Optional</sup> <a name="shouldCopyOplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings.property.shouldCopyOplogs"></a>

```java
public java.lang.Object getShouldCopyOplogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}.

---

### CloudBackupScheduleExport <a name="CloudBackupScheduleExport" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupScheduleExport;

CloudBackupScheduleExport.builder()
//  .exportBucketId(java.lang.String)
//  .frequencyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.exportBucketId">exportBucketId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}. |

---

##### `exportBucketId`<sup>Optional</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.exportBucketId"></a>

```java
public java.lang.String getExportBucketId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}.

---

##### `frequencyType`<sup>Optional</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}.

---

### CloudBackupSchedulePolicyItemDaily <a name="CloudBackupSchedulePolicyItemDaily" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemDaily;

CloudBackupSchedulePolicyItemDaily.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemHourly <a name="CloudBackupSchedulePolicyItemHourly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemHourly;

CloudBackupSchedulePolicyItemHourly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemMonthly <a name="CloudBackupSchedulePolicyItemMonthly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemMonthly;

CloudBackupSchedulePolicyItemMonthly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

### CloudBackupSchedulePolicyItemWeekly <a name="CloudBackupSchedulePolicyItemWeekly" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemWeekly;

CloudBackupSchedulePolicyItemWeekly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackupScheduleCopySettingsList <a name="CloudBackupScheduleCopySettingsList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupScheduleCopySettingsList;

new CloudBackupScheduleCopySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get"></a>

```java
public CloudBackupScheduleCopySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>>

---


### CloudBackupScheduleCopySettingsOutputReference <a name="CloudBackupScheduleCopySettingsOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupScheduleCopySettingsOutputReference;

new CloudBackupScheduleCopySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetFrequencies">resetFrequencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetRegionName">resetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetReplicationSpecId">resetReplicationSpecId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetShouldCopyOplogs">resetShouldCopyOplogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudProvider` <a name="resetCloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetCloudProvider"></a>

```java
public void resetCloudProvider()
```

##### `resetFrequencies` <a name="resetFrequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetFrequencies"></a>

```java
public void resetFrequencies()
```

##### `resetRegionName` <a name="resetRegionName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetRegionName"></a>

```java
public void resetRegionName()
```

##### `resetReplicationSpecId` <a name="resetReplicationSpecId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetReplicationSpecId"></a>

```java
public void resetReplicationSpecId()
```

##### `resetShouldCopyOplogs` <a name="resetShouldCopyOplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.resetShouldCopyOplogs"></a>

```java
public void resetShouldCopyOplogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequenciesInput">frequenciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecIdInput">replicationSpecIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogsInput">shouldCopyOplogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequencies">frequencies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecId">replicationSpecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogs">shouldCopyOplogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProviderInput"></a>

```java
public java.lang.String getCloudProviderInput();
```

- *Type:* java.lang.String

---

##### `frequenciesInput`<sup>Optional</sup> <a name="frequenciesInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequenciesInput"></a>

```java
public java.util.List<java.lang.String> getFrequenciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `replicationSpecIdInput`<sup>Optional</sup> <a name="replicationSpecIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecIdInput"></a>

```java
public java.lang.String getReplicationSpecIdInput();
```

- *Type:* java.lang.String

---

##### `shouldCopyOplogsInput`<sup>Optional</sup> <a name="shouldCopyOplogsInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogsInput"></a>

```java
public java.lang.Object getShouldCopyOplogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `frequencies`<sup>Required</sup> <a name="frequencies" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.frequencies"></a>

```java
public java.util.List<java.lang.String> getFrequencies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `replicationSpecId`<sup>Required</sup> <a name="replicationSpecId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.replicationSpecId"></a>

```java
public java.lang.String getReplicationSpecId();
```

- *Type:* java.lang.String

---

##### `shouldCopyOplogs`<sup>Required</sup> <a name="shouldCopyOplogs" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.shouldCopyOplogs"></a>

```java
public java.lang.Object getShouldCopyOplogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleCopySettings">CloudBackupScheduleCopySettings</a>

---


### CloudBackupScheduleExportOutputReference <a name="CloudBackupScheduleExportOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupScheduleExportOutputReference;

new CloudBackupScheduleExportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetExportBucketId">resetExportBucketId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetFrequencyType">resetFrequencyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportBucketId` <a name="resetExportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetExportBucketId"></a>

```java
public void resetExportBucketId()
```

##### `resetFrequencyType` <a name="resetFrequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.resetFrequencyType"></a>

```java
public void resetFrequencyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketIdInput">exportBucketIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyTypeInput">frequencyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketId">exportBucketId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportBucketIdInput`<sup>Optional</sup> <a name="exportBucketIdInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketIdInput"></a>

```java
public java.lang.String getExportBucketIdInput();
```

- *Type:* java.lang.String

---

##### `frequencyTypeInput`<sup>Optional</sup> <a name="frequencyTypeInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyTypeInput"></a>

```java
public java.lang.String getFrequencyTypeInput();
```

- *Type:* java.lang.String

---

##### `exportBucketId`<sup>Required</sup> <a name="exportBucketId" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.exportBucketId"></a>

```java
public java.lang.String getExportBucketId();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExportOutputReference.property.internalValue"></a>

```java
public CloudBackupScheduleExport getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupScheduleExport">CloudBackupScheduleExport</a>

---


### CloudBackupSchedulePolicyItemDailyOutputReference <a name="CloudBackupSchedulePolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemDailyOutputReference;

new CloudBackupSchedulePolicyItemDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDailyOutputReference.property.internalValue"></a>

```java
public CloudBackupSchedulePolicyItemDaily getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemDaily">CloudBackupSchedulePolicyItemDaily</a>

---


### CloudBackupSchedulePolicyItemHourlyOutputReference <a name="CloudBackupSchedulePolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemHourlyOutputReference;

new CloudBackupSchedulePolicyItemHourlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourlyOutputReference.property.internalValue"></a>

```java
public CloudBackupSchedulePolicyItemHourly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemHourly">CloudBackupSchedulePolicyItemHourly</a>

---


### CloudBackupSchedulePolicyItemMonthlyList <a name="CloudBackupSchedulePolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemMonthlyList;

new CloudBackupSchedulePolicyItemMonthlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get"></a>

```java
public CloudBackupSchedulePolicyItemMonthlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>>

---


### CloudBackupSchedulePolicyItemMonthlyOutputReference <a name="CloudBackupSchedulePolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemMonthlyOutputReference;

new CloudBackupSchedulePolicyItemMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthlyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemMonthly">CloudBackupSchedulePolicyItemMonthly</a>

---


### CloudBackupSchedulePolicyItemWeeklyList <a name="CloudBackupSchedulePolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemWeeklyList;

new CloudBackupSchedulePolicyItemWeeklyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get"></a>

```java
public CloudBackupSchedulePolicyItemWeeklyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>>

---


### CloudBackupSchedulePolicyItemWeeklyOutputReference <a name="CloudBackupSchedulePolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_backup_schedule.CloudBackupSchedulePolicyItemWeeklyOutputReference;

new CloudBackupSchedulePolicyItemWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeeklyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.cloudBackupSchedule.CloudBackupSchedulePolicyItemWeekly">CloudBackupSchedulePolicyItemWeekly</a>

---



