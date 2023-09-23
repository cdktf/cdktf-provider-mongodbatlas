# `mongodbatlas_project`

Refer to the Terraform Registory for docs: [`mongodbatlas_project`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-mongodbatlas.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-mongodbatlas.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project mongodbatlas_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.Project.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.Project;

Project.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .isCollectDatabaseSpecificsStatisticsEnabled(java.lang.Boolean)
//  .isCollectDatabaseSpecificsStatisticsEnabled(IResolvable)
//  .isDataExplorerEnabled(java.lang.Boolean)
//  .isDataExplorerEnabled(IResolvable)
//  .isExtendedStorageSizesEnabled(java.lang.Boolean)
//  .isExtendedStorageSizesEnabled(IResolvable)
//  .isPerformanceAdvisorEnabled(java.lang.Boolean)
//  .isPerformanceAdvisorEnabled(IResolvable)
//  .isRealtimePerformancePanelEnabled(java.lang.Boolean)
//  .isRealtimePerformancePanelEnabled(IResolvable)
//  .isSchemaAdvisorEnabled(java.lang.Boolean)
//  .isSchemaAdvisorEnabled(IResolvable)
//  .limits(IResolvable)
//  .limits(java.util.List<ProjectLimits>)
//  .projectOwnerId(java.lang.String)
//  .regionUsageRestrictions(java.lang.String)
//  .teams(IResolvable)
//  .teams(java.util.List<ProjectTeams>)
//  .withDefaultAlertsSettings(java.lang.Boolean)
//  .withDefaultAlertsSettings(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#org_id Project#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_data_explorer_enabled Project#is_data_explorer_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isExtendedStorageSizesEnabled">isExtendedStorageSizesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_extended_storage_sizes_enabled Project#is_extended_storage_sizes_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.limits">limits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>></code> | limits block. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.projectOwnerId">projectOwnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#project_owner_id Project#project_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.regionUsageRestrictions">regionUsageRestrictions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#region_usage_restrictions Project#region_usage_restrictions}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.teams">teams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>></code> | teams block. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#with_default_alerts_settings Project#with_default_alerts_settings}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#name Project#name}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#org_id Project#org_id}.

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isCollectDatabaseSpecificsStatisticsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}.

---

##### `isDataExplorerEnabled`<sup>Optional</sup> <a name="isDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isDataExplorerEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_data_explorer_enabled Project#is_data_explorer_enabled}.

---

##### `isExtendedStorageSizesEnabled`<sup>Optional</sup> <a name="isExtendedStorageSizesEnabled" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isExtendedStorageSizesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_extended_storage_sizes_enabled Project#is_extended_storage_sizes_enabled}.

---

##### `isPerformanceAdvisorEnabled`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isPerformanceAdvisorEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}.

---

##### `isRealtimePerformancePanelEnabled`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isRealtimePerformancePanelEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}.

---

##### `isSchemaAdvisorEnabled`<sup>Optional</sup> <a name="isSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.isSchemaAdvisorEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.limits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#limits Project#limits}

---

##### `projectOwnerId`<sup>Optional</sup> <a name="projectOwnerId" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.projectOwnerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#project_owner_id Project#project_owner_id}.

---

##### `regionUsageRestrictions`<sup>Optional</sup> <a name="regionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.regionUsageRestrictions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#region_usage_restrictions Project#region_usage_restrictions}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.teams"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>>

teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#teams Project#teams}

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.withDefaultAlertsSettings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#with_default_alerts_settings Project#with_default_alerts_settings}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.putTeams">putTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsCollectDatabaseSpecificsStatisticsEnabled">resetIsCollectDatabaseSpecificsStatisticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsDataExplorerEnabled">resetIsDataExplorerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsExtendedStorageSizesEnabled">resetIsExtendedStorageSizesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsPerformanceAdvisorEnabled">resetIsPerformanceAdvisorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsRealtimePerformancePanelEnabled">resetIsRealtimePerformancePanelEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsSchemaAdvisorEnabled">resetIsSchemaAdvisorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetProjectOwnerId">resetProjectOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetRegionUsageRestrictions">resetRegionUsageRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetWithDefaultAlertsSettings">resetWithDefaultAlertsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.Project.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.project.Project.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.project.Project.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.Project.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.project.Project.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.project.Project.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.project.Project.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.project.Project.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.project.Project.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-mongodbatlas.project.Project.putLimits"></a>

```java
public void putLimits(IResolvable OR java.util.List<ProjectLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.Project.putLimits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>>

---

##### `putTeams` <a name="putTeams" id="@cdktf/provider-mongodbatlas.project.Project.putTeams"></a>

```java
public void putTeams(IResolvable OR java.util.List<ProjectTeams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.Project.putTeams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>>

---

##### `resetIsCollectDatabaseSpecificsStatisticsEnabled` <a name="resetIsCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsCollectDatabaseSpecificsStatisticsEnabled"></a>

```java
public void resetIsCollectDatabaseSpecificsStatisticsEnabled()
```

##### `resetIsDataExplorerEnabled` <a name="resetIsDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsDataExplorerEnabled"></a>

```java
public void resetIsDataExplorerEnabled()
```

##### `resetIsExtendedStorageSizesEnabled` <a name="resetIsExtendedStorageSizesEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsExtendedStorageSizesEnabled"></a>

```java
public void resetIsExtendedStorageSizesEnabled()
```

##### `resetIsPerformanceAdvisorEnabled` <a name="resetIsPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsPerformanceAdvisorEnabled"></a>

```java
public void resetIsPerformanceAdvisorEnabled()
```

##### `resetIsRealtimePerformancePanelEnabled` <a name="resetIsRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsRealtimePerformancePanelEnabled"></a>

```java
public void resetIsRealtimePerformancePanelEnabled()
```

##### `resetIsSchemaAdvisorEnabled` <a name="resetIsSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsSchemaAdvisorEnabled"></a>

```java
public void resetIsSchemaAdvisorEnabled()
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-mongodbatlas.project.Project.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetProjectOwnerId` <a name="resetProjectOwnerId" id="@cdktf/provider-mongodbatlas.project.Project.resetProjectOwnerId"></a>

```java
public void resetProjectOwnerId()
```

##### `resetRegionUsageRestrictions` <a name="resetRegionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.Project.resetRegionUsageRestrictions"></a>

```java
public void resetRegionUsageRestrictions()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-mongodbatlas.project.Project.resetTeams"></a>

```java
public void resetTeams()
```

##### `resetWithDefaultAlertsSettings` <a name="resetWithDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.Project.resetWithDefaultAlertsSettings"></a>

```java
public void resetWithDefaultAlertsSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.project.Project.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.Project;

Project.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.project.Project.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.Project;

Project.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.Project;

Project.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.clusterCount">clusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList">ProjectLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.teams">teams</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList">ProjectTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabledInput">isCollectDatabaseSpecificsStatisticsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabledInput">isDataExplorerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isExtendedStorageSizesEnabledInput">isExtendedStorageSizesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabledInput">isPerformanceAdvisorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabledInput">isRealtimePerformancePanelEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabledInput">isSchemaAdvisorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.limitsInput">limitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerIdInput">projectOwnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictionsInput">regionUsageRestrictionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.teamsInput">teamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettingsInput">withDefaultAlertsSettingsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isExtendedStorageSizesEnabled">isExtendedStorageSizesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerId">projectOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictions">regionUsageRestrictions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.project.Project.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.project.Project.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.Project.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.project.Project.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.project.Project.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.project.Project.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.project.Project.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.project.Project.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.project.Project.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.project.Project.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.project.Project.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.project.Project.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.project.Project.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.project.Project.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterCount`<sup>Required</sup> <a name="clusterCount" id="@cdktf/provider-mongodbatlas.project.Project.property.clusterCount"></a>

```java
public java.lang.Number getClusterCount();
```

- *Type:* java.lang.Number

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.project.Project.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.project.Project.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-mongodbatlas.project.Project.property.limits"></a>

```java
public ProjectLimitsList getLimits();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList">ProjectLimitsList</a>

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-mongodbatlas.project.Project.property.teams"></a>

```java
public ProjectTeamsList getTeams();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList">ProjectTeamsList</a>

---

##### `isCollectDatabaseSpecificsStatisticsEnabledInput`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabledInput"></a>

```java
public java.lang.Object getIsCollectDatabaseSpecificsStatisticsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDataExplorerEnabledInput`<sup>Optional</sup> <a name="isDataExplorerEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabledInput"></a>

```java
public java.lang.Object getIsDataExplorerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isExtendedStorageSizesEnabledInput`<sup>Optional</sup> <a name="isExtendedStorageSizesEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isExtendedStorageSizesEnabledInput"></a>

```java
public java.lang.Object getIsExtendedStorageSizesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPerformanceAdvisorEnabledInput`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabledInput"></a>

```java
public java.lang.Object getIsPerformanceAdvisorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRealtimePerformancePanelEnabledInput`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabledInput"></a>

```java
public java.lang.Object getIsRealtimePerformancePanelEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSchemaAdvisorEnabledInput`<sup>Optional</sup> <a name="isSchemaAdvisorEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabledInput"></a>

```java
public java.lang.Object getIsSchemaAdvisorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.limitsInput"></a>

```java
public java.lang.Object getLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.project.Project.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.project.Project.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `projectOwnerIdInput`<sup>Optional</sup> <a name="projectOwnerIdInput" id="@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerIdInput"></a>

```java
public java.lang.String getProjectOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `regionUsageRestrictionsInput`<sup>Optional</sup> <a name="regionUsageRestrictionsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictionsInput"></a>

```java
public java.lang.String getRegionUsageRestrictionsInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.teamsInput"></a>

```java
public java.lang.Object getTeamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>>

---

##### `withDefaultAlertsSettingsInput`<sup>Optional</sup> <a name="withDefaultAlertsSettingsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettingsInput"></a>

```java
public java.lang.Object getWithDefaultAlertsSettingsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Required</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```java
public java.lang.Object getIsCollectDatabaseSpecificsStatisticsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDataExplorerEnabled`<sup>Required</sup> <a name="isDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabled"></a>

```java
public java.lang.Object getIsDataExplorerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isExtendedStorageSizesEnabled`<sup>Required</sup> <a name="isExtendedStorageSizesEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isExtendedStorageSizesEnabled"></a>

```java
public java.lang.Object getIsExtendedStorageSizesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPerformanceAdvisorEnabled`<sup>Required</sup> <a name="isPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabled"></a>

```java
public java.lang.Object getIsPerformanceAdvisorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRealtimePerformancePanelEnabled`<sup>Required</sup> <a name="isRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabled"></a>

```java
public java.lang.Object getIsRealtimePerformancePanelEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSchemaAdvisorEnabled`<sup>Required</sup> <a name="isSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabled"></a>

```java
public java.lang.Object getIsSchemaAdvisorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.Project.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.project.Project.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `projectOwnerId`<sup>Required</sup> <a name="projectOwnerId" id="@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerId"></a>

```java
public java.lang.String getProjectOwnerId();
```

- *Type:* java.lang.String

---

##### `regionUsageRestrictions`<sup>Required</sup> <a name="regionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictions"></a>

```java
public java.lang.String getRegionUsageRestrictions();
```

- *Type:* java.lang.String

---

##### `withDefaultAlertsSettings`<sup>Required</sup> <a name="withDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettings"></a>

```java
public java.lang.Object getWithDefaultAlertsSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.project.Project.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-mongodbatlas.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectConfig;

ProjectConfig.builder()
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
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .isCollectDatabaseSpecificsStatisticsEnabled(java.lang.Boolean)
//  .isCollectDatabaseSpecificsStatisticsEnabled(IResolvable)
//  .isDataExplorerEnabled(java.lang.Boolean)
//  .isDataExplorerEnabled(IResolvable)
//  .isExtendedStorageSizesEnabled(java.lang.Boolean)
//  .isExtendedStorageSizesEnabled(IResolvable)
//  .isPerformanceAdvisorEnabled(java.lang.Boolean)
//  .isPerformanceAdvisorEnabled(IResolvable)
//  .isRealtimePerformancePanelEnabled(java.lang.Boolean)
//  .isRealtimePerformancePanelEnabled(IResolvable)
//  .isSchemaAdvisorEnabled(java.lang.Boolean)
//  .isSchemaAdvisorEnabled(IResolvable)
//  .limits(IResolvable)
//  .limits(java.util.List<ProjectLimits>)
//  .projectOwnerId(java.lang.String)
//  .regionUsageRestrictions(java.lang.String)
//  .teams(IResolvable)
//  .teams(java.util.List<ProjectTeams>)
//  .withDefaultAlertsSettings(java.lang.Boolean)
//  .withDefaultAlertsSettings(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#org_id Project#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_data_explorer_enabled Project#is_data_explorer_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isExtendedStorageSizesEnabled">isExtendedStorageSizesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_extended_storage_sizes_enabled Project#is_extended_storage_sizes_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.limits">limits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>></code> | limits block. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.projectOwnerId">projectOwnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#project_owner_id Project#project_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.regionUsageRestrictions">regionUsageRestrictions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#region_usage_restrictions Project#region_usage_restrictions}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.teams">teams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>></code> | teams block. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#with_default_alerts_settings Project#with_default_alerts_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#name Project#name}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#org_id Project#org_id}.

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```java
public java.lang.Object getIsCollectDatabaseSpecificsStatisticsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}.

---

##### `isDataExplorerEnabled`<sup>Optional</sup> <a name="isDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isDataExplorerEnabled"></a>

```java
public java.lang.Object getIsDataExplorerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_data_explorer_enabled Project#is_data_explorer_enabled}.

---

##### `isExtendedStorageSizesEnabled`<sup>Optional</sup> <a name="isExtendedStorageSizesEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isExtendedStorageSizesEnabled"></a>

```java
public java.lang.Object getIsExtendedStorageSizesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_extended_storage_sizes_enabled Project#is_extended_storage_sizes_enabled}.

---

##### `isPerformanceAdvisorEnabled`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isPerformanceAdvisorEnabled"></a>

```java
public java.lang.Object getIsPerformanceAdvisorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}.

---

##### `isRealtimePerformancePanelEnabled`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isRealtimePerformancePanelEnabled"></a>

```java
public java.lang.Object getIsRealtimePerformancePanelEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}.

---

##### `isSchemaAdvisorEnabled`<sup>Optional</sup> <a name="isSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isSchemaAdvisorEnabled"></a>

```java
public java.lang.Object getIsSchemaAdvisorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.limits"></a>

```java
public java.lang.Object getLimits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#limits Project#limits}

---

##### `projectOwnerId`<sup>Optional</sup> <a name="projectOwnerId" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.projectOwnerId"></a>

```java
public java.lang.String getProjectOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#project_owner_id Project#project_owner_id}.

---

##### `regionUsageRestrictions`<sup>Optional</sup> <a name="regionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.regionUsageRestrictions"></a>

```java
public java.lang.String getRegionUsageRestrictions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#region_usage_restrictions Project#region_usage_restrictions}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.teams"></a>

```java
public java.lang.Object getTeams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>>

teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#teams Project#teams}

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.withDefaultAlertsSettings"></a>

```java
public java.lang.Object getWithDefaultAlertsSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#with_default_alerts_settings Project#with_default_alerts_settings}.

---

### ProjectLimits <a name="ProjectLimits" id="@cdktf/provider-mongodbatlas.project.ProjectLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.project.ProjectLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectLimits;

ProjectLimits.builder()
    .name(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#value Project#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.ProjectLimits.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#name Project#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.ProjectLimits.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#value Project#value}.

---

### ProjectTeams <a name="ProjectTeams" id="@cdktf/provider-mongodbatlas.project.ProjectTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.project.ProjectTeams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectTeams;

ProjectTeams.builder()
    .roleNames(java.util.List<java.lang.String>)
    .teamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams.property.roleNames">roleNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#role_names Project#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#team_id Project#team_id}. |

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.project.ProjectTeams.property.roleNames"></a>

```java
public java.util.List<java.lang.String> getRoleNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#role_names Project#role_names}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.project.ProjectTeams.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/project#team_id Project#team_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectLimitsList <a name="ProjectLimitsList" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectLimitsList;

new ProjectLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.get"></a>

```java
public ProjectLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>>

---


### ProjectLimitsOutputReference <a name="ProjectLimitsOutputReference" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectLimitsOutputReference;

new ProjectLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.currentUsage">currentUsage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.defaultLimit">defaultLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.maximumLimit">maximumLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentUsage`<sup>Required</sup> <a name="currentUsage" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.currentUsage"></a>

```java
public java.lang.Number getCurrentUsage();
```

- *Type:* java.lang.Number

---

##### `defaultLimit`<sup>Required</sup> <a name="defaultLimit" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.defaultLimit"></a>

```java
public java.lang.Number getDefaultLimit();
```

- *Type:* java.lang.Number

---

##### `maximumLimit`<sup>Required</sup> <a name="maximumLimit" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.maximumLimit"></a>

```java
public java.lang.Number getMaximumLimit();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.project.ProjectLimits">ProjectLimits</a>

---


### ProjectTeamsList <a name="ProjectTeamsList" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectTeamsList;

new ProjectTeamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.get"></a>

```java
public ProjectTeamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>>

---


### ProjectTeamsOutputReference <a name="ProjectTeamsOutputReference" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.project.ProjectTeamsOutputReference;

new ProjectTeamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNamesInput">roleNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNames">roleNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleNamesInput`<sup>Optional</sup> <a name="roleNamesInput" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNamesInput"></a>

```java
public java.util.List<java.lang.String> getRoleNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNames"></a>

```java
public java.util.List<java.lang.String> getRoleNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>

---



