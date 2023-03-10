# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-mongodbatlas.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-mongodbatlas.project.Project"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project mongodbatlas_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.Project.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

new project.Project(scope: Construct, id: string, config: ProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig">ProjectConfig</a>

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
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.putApiKeys">putApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.putTeams">putTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetApiKeys">resetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsCollectDatabaseSpecificsStatisticsEnabled">resetIsCollectDatabaseSpecificsStatisticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsDataExplorerEnabled">resetIsDataExplorerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsPerformanceAdvisorEnabled">resetIsPerformanceAdvisorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsRealtimePerformancePanelEnabled">resetIsRealtimePerformancePanelEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetIsSchemaAdvisorEnabled">resetIsSchemaAdvisorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetProjectOwnerId">resetProjectOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetRegionUsageRestrictions">resetRegionUsageRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.resetWithDefaultAlertsSettings">resetWithDefaultAlertsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.project.Project.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.Project.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.project.Project.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.project.Project.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.project.Project.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.project.Project.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.project.Project.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApiKeys` <a name="putApiKeys" id="@cdktf/provider-mongodbatlas.project.Project.putApiKeys"></a>

```typescript
public putApiKeys(value: IResolvable | ProjectApiKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.Project.putApiKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]

---

##### `putTeams` <a name="putTeams" id="@cdktf/provider-mongodbatlas.project.Project.putTeams"></a>

```typescript
public putTeams(value: IResolvable | ProjectTeams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.project.Project.putTeams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]

---

##### `resetApiKeys` <a name="resetApiKeys" id="@cdktf/provider-mongodbatlas.project.Project.resetApiKeys"></a>

```typescript
public resetApiKeys(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.project.Project.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCollectDatabaseSpecificsStatisticsEnabled` <a name="resetIsCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsCollectDatabaseSpecificsStatisticsEnabled"></a>

```typescript
public resetIsCollectDatabaseSpecificsStatisticsEnabled(): void
```

##### `resetIsDataExplorerEnabled` <a name="resetIsDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsDataExplorerEnabled"></a>

```typescript
public resetIsDataExplorerEnabled(): void
```

##### `resetIsPerformanceAdvisorEnabled` <a name="resetIsPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsPerformanceAdvisorEnabled"></a>

```typescript
public resetIsPerformanceAdvisorEnabled(): void
```

##### `resetIsRealtimePerformancePanelEnabled` <a name="resetIsRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsRealtimePerformancePanelEnabled"></a>

```typescript
public resetIsRealtimePerformancePanelEnabled(): void
```

##### `resetIsSchemaAdvisorEnabled` <a name="resetIsSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.resetIsSchemaAdvisorEnabled"></a>

```typescript
public resetIsSchemaAdvisorEnabled(): void
```

##### `resetProjectOwnerId` <a name="resetProjectOwnerId" id="@cdktf/provider-mongodbatlas.project.Project.resetProjectOwnerId"></a>

```typescript
public resetProjectOwnerId(): void
```

##### `resetRegionUsageRestrictions` <a name="resetRegionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.Project.resetRegionUsageRestrictions"></a>

```typescript
public resetRegionUsageRestrictions(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-mongodbatlas.project.Project.resetTeams"></a>

```typescript
public resetTeams(): void
```

##### `resetWithDefaultAlertsSettings` <a name="resetWithDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.Project.resetWithDefaultAlertsSettings"></a>

```typescript
public resetWithDefaultAlertsSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.project.Project.isConstruct"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

project.Project.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformElement"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

project.Project.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformResource"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

project.Project.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.apiKeys">apiKeys</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList">ProjectApiKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.clusterCount">clusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.teams">teams</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList">ProjectTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.apiKeysInput">apiKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabledInput">isCollectDatabaseSpecificsStatisticsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabledInput">isDataExplorerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabledInput">isPerformanceAdvisorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabledInput">isRealtimePerformancePanelEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabledInput">isSchemaAdvisorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerIdInput">projectOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictionsInput">regionUsageRestrictionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.teamsInput">teamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettingsInput">withDefaultAlertsSettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerId">projectOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictions">regionUsageRestrictions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.project.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.project.Project.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.Project.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.project.Project.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.project.Project.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.project.Project.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.project.Project.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.project.Project.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.project.Project.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.project.Project.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.project.Project.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.project.Project.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.project.Project.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.project.Project.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKeys`<sup>Required</sup> <a name="apiKeys" id="@cdktf/provider-mongodbatlas.project.Project.property.apiKeys"></a>

```typescript
public readonly apiKeys: ProjectApiKeysList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList">ProjectApiKeysList</a>

---

##### `clusterCount`<sup>Required</sup> <a name="clusterCount" id="@cdktf/provider-mongodbatlas.project.Project.property.clusterCount"></a>

```typescript
public readonly clusterCount: number;
```

- *Type:* number

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.project.Project.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-mongodbatlas.project.Project.property.teams"></a>

```typescript
public readonly teams: ProjectTeamsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList">ProjectTeamsList</a>

---

##### `apiKeysInput`<sup>Optional</sup> <a name="apiKeysInput" id="@cdktf/provider-mongodbatlas.project.Project.property.apiKeysInput"></a>

```typescript
public readonly apiKeysInput: IResolvable | ProjectApiKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.project.Project.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCollectDatabaseSpecificsStatisticsEnabledInput`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabledInput"></a>

```typescript
public readonly isCollectDatabaseSpecificsStatisticsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDataExplorerEnabledInput`<sup>Optional</sup> <a name="isDataExplorerEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabledInput"></a>

```typescript
public readonly isDataExplorerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPerformanceAdvisorEnabledInput`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabledInput"></a>

```typescript
public readonly isPerformanceAdvisorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRealtimePerformancePanelEnabledInput`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabledInput"></a>

```typescript
public readonly isRealtimePerformancePanelEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSchemaAdvisorEnabledInput`<sup>Optional</sup> <a name="isSchemaAdvisorEnabledInput" id="@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabledInput"></a>

```typescript
public readonly isSchemaAdvisorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.project.Project.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.project.Project.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `projectOwnerIdInput`<sup>Optional</sup> <a name="projectOwnerIdInput" id="@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerIdInput"></a>

```typescript
public readonly projectOwnerIdInput: string;
```

- *Type:* string

---

##### `regionUsageRestrictionsInput`<sup>Optional</sup> <a name="regionUsageRestrictionsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictionsInput"></a>

```typescript
public readonly regionUsageRestrictionsInput: string;
```

- *Type:* string

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.teamsInput"></a>

```typescript
public readonly teamsInput: IResolvable | ProjectTeams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]

---

##### `withDefaultAlertsSettingsInput`<sup>Optional</sup> <a name="withDefaultAlertsSettingsInput" id="@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettingsInput"></a>

```typescript
public readonly withDefaultAlertsSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.project.Project.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Required</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```typescript
public readonly isCollectDatabaseSpecificsStatisticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDataExplorerEnabled`<sup>Required</sup> <a name="isDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isDataExplorerEnabled"></a>

```typescript
public readonly isDataExplorerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPerformanceAdvisorEnabled`<sup>Required</sup> <a name="isPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isPerformanceAdvisorEnabled"></a>

```typescript
public readonly isPerformanceAdvisorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRealtimePerformancePanelEnabled`<sup>Required</sup> <a name="isRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isRealtimePerformancePanelEnabled"></a>

```typescript
public readonly isRealtimePerformancePanelEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSchemaAdvisorEnabled`<sup>Required</sup> <a name="isSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.Project.property.isSchemaAdvisorEnabled"></a>

```typescript
public readonly isSchemaAdvisorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.project.Project.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `projectOwnerId`<sup>Required</sup> <a name="projectOwnerId" id="@cdktf/provider-mongodbatlas.project.Project.property.projectOwnerId"></a>

```typescript
public readonly projectOwnerId: string;
```

- *Type:* string

---

##### `regionUsageRestrictions`<sup>Required</sup> <a name="regionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.Project.property.regionUsageRestrictions"></a>

```typescript
public readonly regionUsageRestrictions: string;
```

- *Type:* string

---

##### `withDefaultAlertsSettings`<sup>Required</sup> <a name="withDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.Project.property.withDefaultAlertsSettings"></a>

```typescript
public readonly withDefaultAlertsSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.project.Project.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectApiKeys <a name="ProjectApiKeys" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeys.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

const projectApiKeys: project.ProjectApiKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#api_key_id Project#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys.property.roleNames">roleNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#role_names Project#role_names}. |

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeys.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#api_key_id Project#api_key_id}.

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeys.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#role_names Project#role_names}.

---

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-mongodbatlas.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

const projectConfig: project.ProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#name Project#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#org_id Project#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.apiKeys">apiKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]</code> | api_keys block. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#id Project#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_data_explorer_enabled Project#is_data_explorer_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.projectOwnerId">projectOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#project_owner_id Project#project_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.regionUsageRestrictions">regionUsageRestrictions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#region_usage_restrictions Project#region_usage_restrictions}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.teams">teams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]</code> | teams block. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectConfig.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#with_default_alerts_settings Project#with_default_alerts_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#name Project#name}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#org_id Project#org_id}.

---

##### `apiKeys`<sup>Optional</sup> <a name="apiKeys" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.apiKeys"></a>

```typescript
public readonly apiKeys: IResolvable | ProjectApiKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]

api_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#api_keys Project#api_keys}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```typescript
public readonly isCollectDatabaseSpecificsStatisticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}.

---

##### `isDataExplorerEnabled`<sup>Optional</sup> <a name="isDataExplorerEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isDataExplorerEnabled"></a>

```typescript
public readonly isDataExplorerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_data_explorer_enabled Project#is_data_explorer_enabled}.

---

##### `isPerformanceAdvisorEnabled`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isPerformanceAdvisorEnabled"></a>

```typescript
public readonly isPerformanceAdvisorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}.

---

##### `isRealtimePerformancePanelEnabled`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isRealtimePerformancePanelEnabled"></a>

```typescript
public readonly isRealtimePerformancePanelEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}.

---

##### `isSchemaAdvisorEnabled`<sup>Optional</sup> <a name="isSchemaAdvisorEnabled" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.isSchemaAdvisorEnabled"></a>

```typescript
public readonly isSchemaAdvisorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}.

---

##### `projectOwnerId`<sup>Optional</sup> <a name="projectOwnerId" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.projectOwnerId"></a>

```typescript
public readonly projectOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#project_owner_id Project#project_owner_id}.

---

##### `regionUsageRestrictions`<sup>Optional</sup> <a name="regionUsageRestrictions" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.regionUsageRestrictions"></a>

```typescript
public readonly regionUsageRestrictions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#region_usage_restrictions Project#region_usage_restrictions}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.teams"></a>

```typescript
public readonly teams: IResolvable | ProjectTeams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]

teams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#teams Project#teams}

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="@cdktf/provider-mongodbatlas.project.ProjectConfig.property.withDefaultAlertsSettings"></a>

```typescript
public readonly withDefaultAlertsSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#with_default_alerts_settings Project#with_default_alerts_settings}.

---

### ProjectTeams <a name="ProjectTeams" id="@cdktf/provider-mongodbatlas.project.ProjectTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.project.ProjectTeams.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

const projectTeams: project.ProjectTeams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams.property.roleNames">roleNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#role_names Project#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#team_id Project#team_id}. |

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.project.ProjectTeams.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#role_names Project#role_names}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.project.ProjectTeams.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project#team_id Project#team_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectApiKeysList <a name="ProjectApiKeysList" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

new project.ProjectApiKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.get"></a>

```typescript
public get(index: number): ProjectApiKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectApiKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a>[]

---


### ProjectApiKeysOutputReference <a name="ProjectApiKeysOutputReference" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

new project.ProjectApiKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.roleNamesInput">roleNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.apiKeyIdInput"></a>

```typescript
public readonly apiKeyIdInput: string;
```

- *Type:* string

---

##### `roleNamesInput`<sup>Optional</sup> <a name="roleNamesInput" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.roleNamesInput"></a>

```typescript
public readonly roleNamesInput: string[];
```

- *Type:* string[]

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectApiKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectApiKeys | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectApiKeys">ProjectApiKeys</a> | cdktf.IResolvable

---


### ProjectTeamsList <a name="ProjectTeamsList" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

new project.ProjectTeamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.get"></a>

```typescript
public get(index: number): ProjectTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectTeams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a>[]

---


### ProjectTeamsOutputReference <a name="ProjectTeamsOutputReference" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-mongodbatlas'

new project.ProjectTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNamesInput">roleNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleNamesInput`<sup>Optional</sup> <a name="roleNamesInput" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNamesInput"></a>

```typescript
public readonly roleNamesInput: string[];
```

- *Type:* string[]

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.project.ProjectTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectTeams | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.project.ProjectTeams">ProjectTeams</a> | cdktf.IResolvable

---



