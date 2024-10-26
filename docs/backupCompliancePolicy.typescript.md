# `backupCompliancePolicy` Submodule <a name="`backupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupCompliancePolicy <a name="BackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicy(scope: Construct, id: string, config: BackupCompliancePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig">BackupCompliancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig">BackupCompliancePolicyConfig</a>

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
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPitEnabled">resetPitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily">resetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly">resetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly">resetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly">resetPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemYearly">resetPolicyItemYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays">resetRestoreWindowDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnDemandPolicyItem` <a name="putOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem"></a>

```typescript
public putOnDemandPolicyItem(value: BackupCompliancePolicyOnDemandPolicyItem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putOnDemandPolicyItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `putPolicyItemDaily` <a name="putPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily"></a>

```typescript
public putPolicyItemDaily(value: BackupCompliancePolicyPolicyItemDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `putPolicyItemHourly` <a name="putPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly"></a>

```typescript
public putPolicyItemHourly(value: BackupCompliancePolicyPolicyItemHourly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `putPolicyItemMonthly` <a name="putPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly"></a>

```typescript
public putPolicyItemMonthly(value: IResolvable | BackupCompliancePolicyPolicyItemMonthly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemMonthly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]

---

##### `putPolicyItemWeekly` <a name="putPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly"></a>

```typescript
public putPolicyItemWeekly(value: IResolvable | BackupCompliancePolicyPolicyItemWeekly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemWeekly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]

---

##### `putPolicyItemYearly` <a name="putPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly"></a>

```typescript
public putPolicyItemYearly(value: IResolvable | BackupCompliancePolicyPolicyItemYearly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.putPolicyItemYearly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]

---

##### `resetCopyProtectionEnabled` <a name="resetCopyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetCopyProtectionEnabled"></a>

```typescript
public resetCopyProtectionEnabled(): void
```

##### `resetEncryptionAtRestEnabled` <a name="resetEncryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetEncryptionAtRestEnabled"></a>

```typescript
public resetEncryptionAtRestEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPitEnabled"></a>

```typescript
public resetPitEnabled(): void
```

##### `resetPolicyItemDaily` <a name="resetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemDaily"></a>

```typescript
public resetPolicyItemDaily(): void
```

##### `resetPolicyItemHourly` <a name="resetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemHourly"></a>

```typescript
public resetPolicyItemHourly(): void
```

##### `resetPolicyItemMonthly` <a name="resetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemMonthly"></a>

```typescript
public resetPolicyItemMonthly(): void
```

##### `resetPolicyItemWeekly` <a name="resetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemWeekly"></a>

```typescript
public resetPolicyItemWeekly(): void
```

##### `resetPolicyItemYearly` <a name="resetPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetPolicyItemYearly"></a>

```typescript
public resetPolicyItemYearly(): void
```

##### `resetRestoreWindowDays` <a name="resetRestoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.resetRestoreWindowDays"></a>

```typescript
public resetRestoreWindowDays(): void
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

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

backupCompliancePolicy.BackupCompliancePolicy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupCompliancePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupCompliancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupCompliancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupCompliancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly">policyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly">policyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearly">policyItemYearly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList">BackupCompliancePolicyPolicyItemYearlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate">updatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser">updatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput">authorizedEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstNameInput">authorizedUserFirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastNameInput">authorizedUserLastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput">copyProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput">encryptionAtRestEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput">onDemandPolicyItemInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput">pitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput">policyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput">policyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput">policyItemMonthlyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput">policyItemWeeklyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearlyInput">policyItemYearlyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput">restoreWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail">authorizedEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstName">authorizedUserFirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastName">authorizedUserLastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled">copyProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled">encryptionAtRestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays">restoreWindowDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onDemandPolicyItem`<sup>Required</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItem"></a>

```typescript
public readonly onDemandPolicyItem: BackupCompliancePolicyOnDemandPolicyItemOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference">BackupCompliancePolicyOnDemandPolicyItemOutputReference</a>

---

##### `policyItemDaily`<sup>Required</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDaily"></a>

```typescript
public readonly policyItemDaily: BackupCompliancePolicyPolicyItemDailyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference">BackupCompliancePolicyPolicyItemDailyOutputReference</a>

---

##### `policyItemHourly`<sup>Required</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourly"></a>

```typescript
public readonly policyItemHourly: BackupCompliancePolicyPolicyItemHourlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference">BackupCompliancePolicyPolicyItemHourlyOutputReference</a>

---

##### `policyItemMonthly`<sup>Required</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthly"></a>

```typescript
public readonly policyItemMonthly: BackupCompliancePolicyPolicyItemMonthlyList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList">BackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `policyItemWeekly`<sup>Required</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeekly"></a>

```typescript
public readonly policyItemWeekly: BackupCompliancePolicyPolicyItemWeeklyList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList">BackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `policyItemYearly`<sup>Required</sup> <a name="policyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearly"></a>

```typescript
public readonly policyItemYearly: BackupCompliancePolicyPolicyItemYearlyList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList">BackupCompliancePolicyPolicyItemYearlyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedDate"></a>

```typescript
public readonly updatedDate: string;
```

- *Type:* string

---

##### `updatedUser`<sup>Required</sup> <a name="updatedUser" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.updatedUser"></a>

```typescript
public readonly updatedUser: string;
```

- *Type:* string

---

##### `authorizedEmailInput`<sup>Optional</sup> <a name="authorizedEmailInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmailInput"></a>

```typescript
public readonly authorizedEmailInput: string;
```

- *Type:* string

---

##### `authorizedUserFirstNameInput`<sup>Optional</sup> <a name="authorizedUserFirstNameInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstNameInput"></a>

```typescript
public readonly authorizedUserFirstNameInput: string;
```

- *Type:* string

---

##### `authorizedUserLastNameInput`<sup>Optional</sup> <a name="authorizedUserLastNameInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastNameInput"></a>

```typescript
public readonly authorizedUserLastNameInput: string;
```

- *Type:* string

---

##### `copyProtectionEnabledInput`<sup>Optional</sup> <a name="copyProtectionEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabledInput"></a>

```typescript
public readonly copyProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionAtRestEnabledInput`<sup>Optional</sup> <a name="encryptionAtRestEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabledInput"></a>

```typescript
public readonly encryptionAtRestEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onDemandPolicyItemInput`<sup>Optional</sup> <a name="onDemandPolicyItemInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.onDemandPolicyItemInput"></a>

```typescript
public readonly onDemandPolicyItemInput: BackupCompliancePolicyOnDemandPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabledInput"></a>

```typescript
public readonly pitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyItemDailyInput`<sup>Optional</sup> <a name="policyItemDailyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemDailyInput"></a>

```typescript
public readonly policyItemDailyInput: BackupCompliancePolicyPolicyItemDaily;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---

##### `policyItemHourlyInput`<sup>Optional</sup> <a name="policyItemHourlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemHourlyInput"></a>

```typescript
public readonly policyItemHourlyInput: BackupCompliancePolicyPolicyItemHourly;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---

##### `policyItemMonthlyInput`<sup>Optional</sup> <a name="policyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemMonthlyInput"></a>

```typescript
public readonly policyItemMonthlyInput: IResolvable | BackupCompliancePolicyPolicyItemMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]

---

##### `policyItemWeeklyInput`<sup>Optional</sup> <a name="policyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemWeeklyInput"></a>

```typescript
public readonly policyItemWeeklyInput: IResolvable | BackupCompliancePolicyPolicyItemWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]

---

##### `policyItemYearlyInput`<sup>Optional</sup> <a name="policyItemYearlyInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.policyItemYearlyInput"></a>

```typescript
public readonly policyItemYearlyInput: IResolvable | BackupCompliancePolicyPolicyItemYearly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `restoreWindowDaysInput`<sup>Optional</sup> <a name="restoreWindowDaysInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDaysInput"></a>

```typescript
public readonly restoreWindowDaysInput: number;
```

- *Type:* number

---

##### `authorizedEmail`<sup>Required</sup> <a name="authorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedEmail"></a>

```typescript
public readonly authorizedEmail: string;
```

- *Type:* string

---

##### `authorizedUserFirstName`<sup>Required</sup> <a name="authorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserFirstName"></a>

```typescript
public readonly authorizedUserFirstName: string;
```

- *Type:* string

---

##### `authorizedUserLastName`<sup>Required</sup> <a name="authorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.authorizedUserLastName"></a>

```typescript
public readonly authorizedUserLastName: string;
```

- *Type:* string

---

##### `copyProtectionEnabled`<sup>Required</sup> <a name="copyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.copyProtectionEnabled"></a>

```typescript
public readonly copyProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionAtRestEnabled`<sup>Required</sup> <a name="encryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```typescript
public readonly encryptionAtRestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.restoreWindowDays"></a>

```typescript
public readonly restoreWindowDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupCompliancePolicyConfig <a name="BackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyConfig: backupCompliancePolicy.BackupCompliancePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail">authorizedEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserFirstName">authorizedUserFirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserLastName">authorizedUserLastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | on_demand_policy_item block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled">copyProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled">encryptionAtRestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly">policyItemMonthly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly">policyItemWeekly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]</code> | policy_item_weekly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemYearly">policyItemYearly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]</code> | policy_item_yearly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays">restoreWindowDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizedEmail`<sup>Required</sup> <a name="authorizedEmail" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedEmail"></a>

```typescript
public readonly authorizedEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}.

---

##### `authorizedUserFirstName`<sup>Required</sup> <a name="authorizedUserFirstName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserFirstName"></a>

```typescript
public readonly authorizedUserFirstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#authorized_user_first_name BackupCompliancePolicy#authorized_user_first_name}.

---

##### `authorizedUserLastName`<sup>Required</sup> <a name="authorizedUserLastName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.authorizedUserLastName"></a>

```typescript
public readonly authorizedUserLastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#authorized_user_last_name BackupCompliancePolicy#authorized_user_last_name}.

---

##### `onDemandPolicyItem`<sup>Required</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.onDemandPolicyItem"></a>

```typescript
public readonly onDemandPolicyItem: BackupCompliancePolicyOnDemandPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

on_demand_policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#on_demand_policy_item BackupCompliancePolicy#on_demand_policy_item}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}.

---

##### `copyProtectionEnabled`<sup>Optional</sup> <a name="copyProtectionEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.copyProtectionEnabled"></a>

```typescript
public readonly copyProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}.

---

##### `encryptionAtRestEnabled`<sup>Optional</sup> <a name="encryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.encryptionAtRestEnabled"></a>

```typescript
public readonly encryptionAtRestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}.

---

##### `policyItemDaily`<sup>Optional</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemDaily"></a>

```typescript
public readonly policyItemDaily: BackupCompliancePolicyPolicyItemDaily;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#policy_item_daily BackupCompliancePolicy#policy_item_daily}

---

##### `policyItemHourly`<sup>Optional</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemHourly"></a>

```typescript
public readonly policyItemHourly: BackupCompliancePolicyPolicyItemHourly;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#policy_item_hourly BackupCompliancePolicy#policy_item_hourly}

---

##### `policyItemMonthly`<sup>Optional</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemMonthly"></a>

```typescript
public readonly policyItemMonthly: IResolvable | BackupCompliancePolicyPolicyItemMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#policy_item_monthly BackupCompliancePolicy#policy_item_monthly}

---

##### `policyItemWeekly`<sup>Optional</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemWeekly"></a>

```typescript
public readonly policyItemWeekly: IResolvable | BackupCompliancePolicyPolicyItemWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#policy_item_weekly BackupCompliancePolicy#policy_item_weekly}

---

##### `policyItemYearly`<sup>Optional</sup> <a name="policyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.policyItemYearly"></a>

```typescript
public readonly policyItemYearly: IResolvable | BackupCompliancePolicyPolicyItemYearly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]

policy_item_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#policy_item_yearly BackupCompliancePolicy#policy_item_yearly}

---

##### `restoreWindowDays`<sup>Optional</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyConfig.property.restoreWindowDays"></a>

```typescript
public readonly restoreWindowDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}.

---

### BackupCompliancePolicyOnDemandPolicyItem <a name="BackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyOnDemandPolicyItem: backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemDaily <a name="BackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyPolicyItemDaily: backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemHourly <a name="BackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyPolicyItemHourly: backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemMonthly <a name="BackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyPolicyItemMonthly: backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemWeekly <a name="BackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyPolicyItemWeekly: backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

### BackupCompliancePolicyPolicyItemYearly <a name="BackupCompliancePolicyPolicyItemYearly" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const backupCompliancePolicyPolicyItemYearly: backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="BackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupCompliancePolicyOnDemandPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyOnDemandPolicyItem">BackupCompliancePolicyOnDemandPolicyItem</a>

---


### BackupCompliancePolicyPolicyItemDailyOutputReference <a name="BackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupCompliancePolicyPolicyItemDaily;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemDaily">BackupCompliancePolicyPolicyItemDaily</a>

---


### BackupCompliancePolicyPolicyItemHourlyOutputReference <a name="BackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupCompliancePolicyPolicyItemHourly;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemHourly">BackupCompliancePolicyPolicyItemHourly</a>

---


### BackupCompliancePolicyPolicyItemMonthlyList <a name="BackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```typescript
public get(index: number): BackupCompliancePolicyPolicyItemMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupCompliancePolicyPolicyItemMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>[]

---


### BackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="BackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupCompliancePolicyPolicyItemMonthly;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemMonthly">BackupCompliancePolicyPolicyItemMonthly</a>

---


### BackupCompliancePolicyPolicyItemWeeklyList <a name="BackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```typescript
public get(index: number): BackupCompliancePolicyPolicyItemWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupCompliancePolicyPolicyItemWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>[]

---


### BackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="BackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupCompliancePolicyPolicyItemWeekly;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemWeekly">BackupCompliancePolicyPolicyItemWeekly</a>

---


### BackupCompliancePolicyPolicyItemYearlyList <a name="BackupCompliancePolicyPolicyItemYearlyList" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get"></a>

```typescript
public get(index: number): BackupCompliancePolicyPolicyItemYearlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupCompliancePolicyPolicyItemYearly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>[]

---


### BackupCompliancePolicyPolicyItemYearlyOutputReference <a name="BackupCompliancePolicyPolicyItemYearlyOutputReference" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer"></a>

```typescript
import { backupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupCompliancePolicyPolicyItemYearly;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.backupCompliancePolicy.BackupCompliancePolicyPolicyItemYearly">BackupCompliancePolicyPolicyItemYearly</a>

---



