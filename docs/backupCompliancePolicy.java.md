# `backupCompliancePolicy` Submodule <a name="`backupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupCompliancePolicy <a name="BackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicy;

BackupCompliancePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .authorizedEmail(java.lang.String)
    .authorizedUserFirstName(java.lang.String)
    .authorizedUserLastName(java.lang.String)
    .projectId(java.lang.String)
//  .copyProtectionEnabled(java.lang.Boolean)
//  .copyProtectionEnabled(IResolvable)
//  .encryptionAtRestEnabled(java.lang.Boolean)
//  .encryptionAtRestEnabled(IResolvable)
//  .id(java.lang.String)
//  .onDemandPolicyItem(BackupCompliancePolicyOnDemandPolicyItem)
//  .pitEnabled(java.lang.Boolean)
//  .pitEnabled(IResolvable)
//  .policyItemDaily(BackupCompliancePolicyPolicyItemDaily)
//  .policyItemHourly(BackupCompliancePolicyPolicyItemHourly)
//  .policyItemMonthly(IResolvable)
//  .policyItemMonthly(java.util.List<BackupCompliancePolicyPolicyItemMonthly>)
//  .policyItemWeekly(IResolvable)
//  .policyItemWeekly(java.util.List<BackupCompliancePolicyPolicyItemWeekly>)
//  .policyItemYearly(IResolvable)
//  .policyItemYearly(java.util.List<BackupCompliancePolicyPolicyItemYearly>)
//  .restoreWindowDays(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.authorizedEmail">authorizedEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.authorizedUserFirstName">authorizedUserFirstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.authorizedUserLastName">authorizedUserLastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.copyProtectionEnabled">copyProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.encryptionAtRestEnabled">encryptionAtRestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | on_demand_policy_item block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemMonthly">policyItemMonthly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>></code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemWeekly">policyItemWeekly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>></code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemYearly">policyItemYearly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>></code> | policy_item_yearly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedEmail`<sup>Required</sup> <a name="authorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.authorizedEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}.

---

##### `authorizedUserFirstName`<sup>Required</sup> <a name="authorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.authorizedUserFirstName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}.

---

##### `authorizedUserLastName`<sup>Required</sup> <a name="authorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.authorizedUserLastName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}.

---

##### `copyProtectionEnabled`<sup>Optional</sup> <a name="copyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.copyProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}.

---

##### `encryptionAtRestEnabled`<sup>Optional</sup> <a name="encryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.encryptionAtRestEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onDemandPolicyItem`<sup>Optional</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.onDemandPolicyItem"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

on_demand_policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#on_demand_policy_item BackupCompliancePolicy#on_demand_policy_item}

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.pitEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}.

---

##### `policyItemDaily`<sup>Optional</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemDaily"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_daily BackupCompliancePolicy#policy_item_daily}

---

##### `policyItemHourly`<sup>Optional</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemHourly"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_hourly BackupCompliancePolicy#policy_item_hourly}

---

##### `policyItemMonthly`<sup>Optional</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemMonthly"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>>

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_monthly BackupCompliancePolicy#policy_item_monthly}

---

##### `policyItemWeekly`<sup>Optional</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemWeekly"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>>

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_weekly BackupCompliancePolicy#policy_item_weekly}

---

##### `policyItemYearly`<sup>Optional</sup> <a name="policyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.policyItemYearly"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>>

policy_item_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_yearly BackupCompliancePolicy#policy_item_yearly}

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.restoreWindowDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem">putOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily">putPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly">putPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly">putPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly">putPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly">putPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetCopyProtectionEnabled">resetCopyProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetEncryptionAtRestEnabled">resetEncryptionAtRestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOnDemandPolicyItem">resetOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPitEnabled">resetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily">resetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly">resetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly">resetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly">resetPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemYearly">resetPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays">resetRestoreWindowDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnDemandPolicyItem` <a name="putOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem"></a>

```java
public void putOnDemandPolicyItem(BackupCompliancePolicyOnDemandPolicyItem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `putPolicyItemDaily` <a name="putPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily"></a>

```java
public void putPolicyItemDaily(BackupCompliancePolicyPolicyItemDaily value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `putPolicyItemHourly` <a name="putPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly"></a>

```java
public void putPolicyItemHourly(BackupCompliancePolicyPolicyItemHourly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `putPolicyItemMonthly` <a name="putPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly"></a>

```java
public void putPolicyItemMonthly(IResolvable OR java.util.List<BackupCompliancePolicyPolicyItemMonthly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>>

---

##### `putPolicyItemWeekly` <a name="putPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly"></a>

```java
public void putPolicyItemWeekly(IResolvable OR java.util.List<BackupCompliancePolicyPolicyItemWeekly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>>

---

##### `putPolicyItemYearly` <a name="putPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly"></a>

```java
public void putPolicyItemYearly(IResolvable OR java.util.List<BackupCompliancePolicyPolicyItemYearly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>>

---

##### `resetCopyProtectionEnabled` <a name="resetCopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetCopyProtectionEnabled"></a>

```java
public void resetCopyProtectionEnabled()
```

##### `resetEncryptionAtRestEnabled` <a name="resetEncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetEncryptionAtRestEnabled"></a>

```java
public void resetEncryptionAtRestEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetOnDemandPolicyItem` <a name="resetOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOnDemandPolicyItem"></a>

```java
public void resetOnDemandPolicyItem()
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPitEnabled"></a>

```java
public void resetPitEnabled()
```

##### `resetPolicyItemDaily` <a name="resetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily"></a>

```java
public void resetPolicyItemDaily()
```

##### `resetPolicyItemHourly` <a name="resetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly"></a>

```java
public void resetPolicyItemHourly()
```

##### `resetPolicyItemMonthly` <a name="resetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly"></a>

```java
public void resetPolicyItemMonthly()
```

##### `resetPolicyItemWeekly` <a name="resetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly"></a>

```java
public void resetPolicyItemWeekly()
```

##### `resetPolicyItemYearly` <a name="resetPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemYearly"></a>

```java
public void resetPolicyItemYearly()
```

##### `resetRestoreWindowDays` <a name="resetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays"></a>

```java
public void resetRestoreWindowDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupCompliancePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicy;

BackupCompliancePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicy;

BackupCompliancePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicy;

BackupCompliancePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicy;

BackupCompliancePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupCompliancePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BackupCompliancePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupCompliancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupCompliancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BackupCompliancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly">policyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly">policyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearly">policyItemYearly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList">BackupCompliancePolicyPolicyItemYearlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate">updatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser">updatedUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput">authorizedEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstNameInput">authorizedUserFirstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastNameInput">authorizedUserLastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput">copyProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput">encryptionAtRestEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput">onDemandPolicyItemInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput">pitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput">policyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput">policyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput">policyItemMonthlyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput">policyItemWeeklyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearlyInput">policyItemYearlyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput">restoreWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail">authorizedEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstName">authorizedUserFirstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastName">authorizedUserLastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled">copyProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled">encryptionAtRestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `onDemandPolicyItem`<sup>Required</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem"></a>

```java
public BackupCompliancePolicyOnDemandPolicyItemOutputReference getOnDemandPolicyItem();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a>

---

##### `policyItemDaily`<sup>Required</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily"></a>

```java
public BackupCompliancePolicyPolicyItemDailyOutputReference getPolicyItemDaily();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a>

---

##### `policyItemHourly`<sup>Required</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly"></a>

```java
public BackupCompliancePolicyPolicyItemHourlyOutputReference getPolicyItemHourly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a>

---

##### `policyItemMonthly`<sup>Required</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly"></a>

```java
public BackupCompliancePolicyPolicyItemMonthlyList getPolicyItemMonthly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `policyItemWeekly`<sup>Required</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly"></a>

```java
public BackupCompliancePolicyPolicyItemWeeklyList getPolicyItemWeekly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `policyItemYearly`<sup>Required</sup> <a name="policyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearly"></a>

```java
public BackupCompliancePolicyPolicyItemYearlyList getPolicyItemYearly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList">BackupCompliancePolicyPolicyItemYearlyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate"></a>

```java
public java.lang.String getUpdatedDate();
```

- *Type:* java.lang.String

---

##### `updatedUser`<sup>Required</sup> <a name="updatedUser" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser"></a>

```java
public java.lang.String getUpdatedUser();
```

- *Type:* java.lang.String

---

##### `authorizedEmailInput`<sup>Optional</sup> <a name="authorizedEmailInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput"></a>

```java
public java.lang.String getAuthorizedEmailInput();
```

- *Type:* java.lang.String

---

##### `authorizedUserFirstNameInput`<sup>Optional</sup> <a name="authorizedUserFirstNameInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstNameInput"></a>

```java
public java.lang.String getAuthorizedUserFirstNameInput();
```

- *Type:* java.lang.String

---

##### `authorizedUserLastNameInput`<sup>Optional</sup> <a name="authorizedUserLastNameInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastNameInput"></a>

```java
public java.lang.String getAuthorizedUserLastNameInput();
```

- *Type:* java.lang.String

---

##### `copyProtectionEnabledInput`<sup>Optional</sup> <a name="copyProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput"></a>

```java
public java.lang.Object getCopyProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionAtRestEnabledInput`<sup>Optional</sup> <a name="encryptionAtRestEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtRestEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onDemandPolicyItemInput`<sup>Optional</sup> <a name="onDemandPolicyItemInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput"></a>

```java
public BackupCompliancePolicyOnDemandPolicyItem getOnDemandPolicyItemInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput"></a>

```java
public java.lang.Object getPitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyItemDailyInput`<sup>Optional</sup> <a name="policyItemDailyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput"></a>

```java
public BackupCompliancePolicyPolicyItemDaily getPolicyItemDailyInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `policyItemHourlyInput`<sup>Optional</sup> <a name="policyItemHourlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput"></a>

```java
public BackupCompliancePolicyPolicyItemHourly getPolicyItemHourlyInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `policyItemMonthlyInput`<sup>Optional</sup> <a name="policyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput"></a>

```java
public java.lang.Object getPolicyItemMonthlyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>>

---

##### `policyItemWeeklyInput`<sup>Optional</sup> <a name="policyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput"></a>

```java
public java.lang.Object getPolicyItemWeeklyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>>

---

##### `policyItemYearlyInput`<sup>Optional</sup> <a name="policyItemYearlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearlyInput"></a>

```java
public java.lang.Object getPolicyItemYearlyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `restoreWindowDaysInput`<sup>Optional</sup> <a name="restoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput"></a>

```java
public java.lang.Number getRestoreWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `authorizedEmail`<sup>Required</sup> <a name="authorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail"></a>

```java
public java.lang.String getAuthorizedEmail();
```

- *Type:* java.lang.String

---

##### `authorizedUserFirstName`<sup>Required</sup> <a name="authorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstName"></a>

```java
public java.lang.String getAuthorizedUserFirstName();
```

- *Type:* java.lang.String

---

##### `authorizedUserLastName`<sup>Required</sup> <a name="authorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastName"></a>

```java
public java.lang.String getAuthorizedUserLastName();
```

- *Type:* java.lang.String

---

##### `copyProtectionEnabled`<sup>Required</sup> <a name="copyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled"></a>

```java
public java.lang.Object getCopyProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionAtRestEnabled`<sup>Required</sup> <a name="encryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```java
public java.lang.Object getEncryptionAtRestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled"></a>

```java
public java.lang.Object getPitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupCompliancePolicyConfig <a name="BackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyConfig;

BackupCompliancePolicyConfig.builder()
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
    .authorizedEmail(java.lang.String)
    .authorizedUserFirstName(java.lang.String)
    .authorizedUserLastName(java.lang.String)
    .projectId(java.lang.String)
//  .copyProtectionEnabled(java.lang.Boolean)
//  .copyProtectionEnabled(IResolvable)
//  .encryptionAtRestEnabled(java.lang.Boolean)
//  .encryptionAtRestEnabled(IResolvable)
//  .id(java.lang.String)
//  .onDemandPolicyItem(BackupCompliancePolicyOnDemandPolicyItem)
//  .pitEnabled(java.lang.Boolean)
//  .pitEnabled(IResolvable)
//  .policyItemDaily(BackupCompliancePolicyPolicyItemDaily)
//  .policyItemHourly(BackupCompliancePolicyPolicyItemHourly)
//  .policyItemMonthly(IResolvable)
//  .policyItemMonthly(java.util.List<BackupCompliancePolicyPolicyItemMonthly>)
//  .policyItemWeekly(IResolvable)
//  .policyItemWeekly(java.util.List<BackupCompliancePolicyPolicyItemWeekly>)
//  .policyItemYearly(IResolvable)
//  .policyItemYearly(java.util.List<BackupCompliancePolicyPolicyItemYearly>)
//  .restoreWindowDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail">authorizedEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserFirstName">authorizedUserFirstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserLastName">authorizedUserLastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled">copyProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled">encryptionAtRestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | on_demand_policy_item block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled">pitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly">policyItemMonthly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>></code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly">policyItemWeekly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>></code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemYearly">policyItemYearly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>></code> | policy_item_yearly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays">restoreWindowDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedEmail`<sup>Required</sup> <a name="authorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail"></a>

```java
public java.lang.String getAuthorizedEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}.

---

##### `authorizedUserFirstName`<sup>Required</sup> <a name="authorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserFirstName"></a>

```java
public java.lang.String getAuthorizedUserFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}.

---

##### `authorizedUserLastName`<sup>Required</sup> <a name="authorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserLastName"></a>

```java
public java.lang.String getAuthorizedUserLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}.

---

##### `copyProtectionEnabled`<sup>Optional</sup> <a name="copyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled"></a>

```java
public java.lang.Object getCopyProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}.

---

##### `encryptionAtRestEnabled`<sup>Optional</sup> <a name="encryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled"></a>

```java
public java.lang.Object getEncryptionAtRestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onDemandPolicyItem`<sup>Optional</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem"></a>

```java
public BackupCompliancePolicyOnDemandPolicyItem getOnDemandPolicyItem();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

on_demand_policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#on_demand_policy_item BackupCompliancePolicy#on_demand_policy_item}

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled"></a>

```java
public java.lang.Object getPitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}.

---

##### `policyItemDaily`<sup>Optional</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily"></a>

```java
public BackupCompliancePolicyPolicyItemDaily getPolicyItemDaily();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_daily BackupCompliancePolicy#policy_item_daily}

---

##### `policyItemHourly`<sup>Optional</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly"></a>

```java
public BackupCompliancePolicyPolicyItemHourly getPolicyItemHourly();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_hourly BackupCompliancePolicy#policy_item_hourly}

---

##### `policyItemMonthly`<sup>Optional</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly"></a>

```java
public java.lang.Object getPolicyItemMonthly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>>

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_monthly BackupCompliancePolicy#policy_item_monthly}

---

##### `policyItemWeekly`<sup>Optional</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly"></a>

```java
public java.lang.Object getPolicyItemWeekly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>>

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_weekly BackupCompliancePolicy#policy_item_weekly}

---

##### `policyItemYearly`<sup>Optional</sup> <a name="policyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemYearly"></a>

```java
public java.lang.Object getPolicyItemYearly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>>

policy_item_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#policy_item_yearly BackupCompliancePolicy#policy_item_yearly}

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays"></a>

```java
public java.lang.Number getRestoreWindowDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}.

---

### BackupCompliancePolicyOnDemandPolicyItem <a name="BackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyOnDemandPolicyItem;

BackupCompliancePolicyOnDemandPolicyItem.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemDaily <a name="BackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemDaily;

BackupCompliancePolicyPolicyItemDaily.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemHourly <a name="BackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemHourly;

BackupCompliancePolicyPolicyItemHourly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemMonthly <a name="BackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemMonthly;

BackupCompliancePolicyPolicyItemMonthly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemWeekly <a name="BackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemWeekly;

BackupCompliancePolicyPolicyItemWeekly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemYearly <a name="BackupCompliancePolicyPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemYearly;

BackupCompliancePolicyPolicyItemYearly.builder()
    .frequencyInterval(java.lang.Number)
    .retentionUnit(java.lang.String)
    .retentionValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="BackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyOnDemandPolicyItemOutputReference;

new BackupCompliancePolicyOnDemandPolicyItemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```java
public BackupCompliancePolicyOnDemandPolicyItem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---


### BackupCompliancePolicyPolicyItemDailyOutputReference <a name="BackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemDailyOutputReference;

new BackupCompliancePolicyPolicyItemDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```java
public BackupCompliancePolicyPolicyItemDaily getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---


### BackupCompliancePolicyPolicyItemHourlyOutputReference <a name="BackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemHourlyOutputReference;

new BackupCompliancePolicyPolicyItemHourlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```java
public BackupCompliancePolicyPolicyItemHourly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---


### BackupCompliancePolicyPolicyItemMonthlyList <a name="BackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemMonthlyList;

new BackupCompliancePolicyPolicyItemMonthlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```java
public BackupCompliancePolicyPolicyItemMonthlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>>

---


### BackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="BackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemMonthlyOutputReference;

new BackupCompliancePolicyPolicyItemMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>

---


### BackupCompliancePolicyPolicyItemWeeklyList <a name="BackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemWeeklyList;

new BackupCompliancePolicyPolicyItemWeeklyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```java
public BackupCompliancePolicyPolicyItemWeeklyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>>

---


### BackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="BackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemWeeklyOutputReference;

new BackupCompliancePolicyPolicyItemWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>

---


### BackupCompliancePolicyPolicyItemYearlyList <a name="BackupCompliancePolicyPolicyItemYearlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemYearlyList;

new BackupCompliancePolicyPolicyItemYearlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get"></a>

```java
public BackupCompliancePolicyPolicyItemYearlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>>

---


### BackupCompliancePolicyPolicyItemYearlyOutputReference <a name="BackupCompliancePolicyPolicyItemYearlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.backup_compliance_policy.BackupCompliancePolicyPolicyItemYearlyOutputReference;

new BackupCompliancePolicyPolicyItemYearlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType"></a>

```java
public java.lang.String getFrequencyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnitInput"></a>

```java
public java.lang.String getRetentionUnitInput();
```

- *Type:* java.lang.String

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValueInput"></a>

```java
public java.lang.Number getRetentionValueInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit"></a>

```java
public java.lang.String getRetentionUnit();
```

- *Type:* java.lang.String

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue"></a>

```java
public java.lang.Number getRetentionValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>

---



