/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#auto_export_enabled CloudBackupSchedule#auto_export_enabled}
  */
  readonly autoExportEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#cluster_name CloudBackupSchedule#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#id CloudBackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#project_id CloudBackupSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#reference_hour_of_day CloudBackupSchedule#reference_hour_of_day}
  */
  readonly referenceHourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#reference_minute_of_hour CloudBackupSchedule#reference_minute_of_hour}
  */
  readonly referenceMinuteOfHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#restore_window_days CloudBackupSchedule#restore_window_days}
  */
  readonly restoreWindowDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#update_snapshots CloudBackupSchedule#update_snapshots}
  */
  readonly updateSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#use_org_and_group_names_in_export_prefix CloudBackupSchedule#use_org_and_group_names_in_export_prefix}
  */
  readonly useOrgAndGroupNamesInExportPrefix?: boolean | cdktf.IResolvable;
  /**
  * copy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#copy_settings CloudBackupSchedule#copy_settings}
  */
  readonly copySettings?: CloudBackupScheduleCopySettings[] | cdktf.IResolvable;
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#export CloudBackupSchedule#export}
  */
  readonly export?: CloudBackupScheduleExport;
  /**
  * policy_item_daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#policy_item_daily CloudBackupSchedule#policy_item_daily}
  */
  readonly policyItemDaily?: CloudBackupSchedulePolicyItemDaily;
  /**
  * policy_item_hourly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#policy_item_hourly CloudBackupSchedule#policy_item_hourly}
  */
  readonly policyItemHourly?: CloudBackupSchedulePolicyItemHourly;
  /**
  * policy_item_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#policy_item_monthly CloudBackupSchedule#policy_item_monthly}
  */
  readonly policyItemMonthly?: CloudBackupSchedulePolicyItemMonthly[] | cdktf.IResolvable;
  /**
  * policy_item_weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#policy_item_weekly CloudBackupSchedule#policy_item_weekly}
  */
  readonly policyItemWeekly?: CloudBackupSchedulePolicyItemWeekly[] | cdktf.IResolvable;
  /**
  * policy_item_yearly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#policy_item_yearly CloudBackupSchedule#policy_item_yearly}
  */
  readonly policyItemYearly?: CloudBackupSchedulePolicyItemYearly[] | cdktf.IResolvable;
}
export interface CloudBackupScheduleCopySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#cloud_provider CloudBackupSchedule#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequencies CloudBackupSchedule#frequencies}
  */
  readonly frequencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#region_name CloudBackupSchedule#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#replication_spec_id CloudBackupSchedule#replication_spec_id}
  */
  readonly replicationSpecId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#should_copy_oplogs CloudBackupSchedule#should_copy_oplogs}
  */
  readonly shouldCopyOplogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#zone_id CloudBackupSchedule#zone_id}
  */
  readonly zoneId?: string;
}

export function cloudBackupScheduleCopySettingsToTerraform(struct?: CloudBackupScheduleCopySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    frequencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.frequencies),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    replication_spec_id: cdktf.stringToTerraform(struct!.replicationSpecId),
    should_copy_oplogs: cdktf.booleanToTerraform(struct!.shouldCopyOplogs),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function cloudBackupScheduleCopySettingsToHclTerraform(struct?: CloudBackupScheduleCopySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.frequencies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_spec_id: {
      value: cdktf.stringToHclTerraform(struct!.replicationSpecId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_copy_oplogs: {
      value: cdktf.booleanToHclTerraform(struct!.shouldCopyOplogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupScheduleCopySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudBackupScheduleCopySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._frequencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencies = this._frequencies;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._replicationSpecId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSpecId = this._replicationSpecId;
    }
    if (this._shouldCopyOplogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldCopyOplogs = this._shouldCopyOplogs;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupScheduleCopySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._frequencies = undefined;
      this._regionName = undefined;
      this._replicationSpecId = undefined;
      this._shouldCopyOplogs = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._frequencies = value.frequencies;
      this._regionName = value.regionName;
      this._replicationSpecId = value.replicationSpecId;
      this._shouldCopyOplogs = value.shouldCopyOplogs;
      this._zoneId = value.zoneId;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // frequencies - computed: true, optional: true, required: false
  private _frequencies?: string[]; 
  public get frequencies() {
    return cdktf.Fn.tolist(this.getListAttribute('frequencies'));
  }
  public set frequencies(value: string[]) {
    this._frequencies = value;
  }
  public resetFrequencies() {
    this._frequencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequenciesInput() {
    return this._frequencies;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // replication_spec_id - computed: true, optional: true, required: false
  private _replicationSpecId?: string; 
  public get replicationSpecId() {
    return this.getStringAttribute('replication_spec_id');
  }
  public set replicationSpecId(value: string) {
    this._replicationSpecId = value;
  }
  public resetReplicationSpecId() {
    this._replicationSpecId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecIdInput() {
    return this._replicationSpecId;
  }

  // should_copy_oplogs - computed: true, optional: true, required: false
  private _shouldCopyOplogs?: boolean | cdktf.IResolvable; 
  public get shouldCopyOplogs() {
    return this.getBooleanAttribute('should_copy_oplogs');
  }
  public set shouldCopyOplogs(value: boolean | cdktf.IResolvable) {
    this._shouldCopyOplogs = value;
  }
  public resetShouldCopyOplogs() {
    this._shouldCopyOplogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCopyOplogsInput() {
    return this._shouldCopyOplogs;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class CloudBackupScheduleCopySettingsList extends cdktf.ComplexList {
  public internalValue? : CloudBackupScheduleCopySettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudBackupScheduleCopySettingsOutputReference {
    return new CloudBackupScheduleCopySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBackupScheduleExport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#export_bucket_id CloudBackupSchedule#export_bucket_id}
  */
  readonly exportBucketId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequency_type CloudBackupSchedule#frequency_type}
  */
  readonly frequencyType?: string;
}

export function cloudBackupScheduleExportToTerraform(struct?: CloudBackupScheduleExportOutputReference | CloudBackupScheduleExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_bucket_id: cdktf.stringToTerraform(struct!.exportBucketId),
    frequency_type: cdktf.stringToTerraform(struct!.frequencyType),
  }
}


export function cloudBackupScheduleExportToHclTerraform(struct?: CloudBackupScheduleExportOutputReference | CloudBackupScheduleExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.exportBucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_type: {
      value: cdktf.stringToHclTerraform(struct!.frequencyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupScheduleExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBackupScheduleExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportBucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportBucketId = this._exportBucketId;
    }
    if (this._frequencyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyType = this._frequencyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupScheduleExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exportBucketId = undefined;
      this._frequencyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exportBucketId = value.exportBucketId;
      this._frequencyType = value.frequencyType;
    }
  }

  // export_bucket_id - computed: true, optional: true, required: false
  private _exportBucketId?: string; 
  public get exportBucketId() {
    return this.getStringAttribute('export_bucket_id');
  }
  public set exportBucketId(value: string) {
    this._exportBucketId = value;
  }
  public resetExportBucketId() {
    this._exportBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportBucketIdInput() {
    return this._exportBucketId;
  }

  // frequency_type - computed: true, optional: true, required: false
  private _frequencyType?: string; 
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }
  public set frequencyType(value: string) {
    this._frequencyType = value;
  }
  public resetFrequencyType() {
    this._frequencyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyTypeInput() {
    return this._frequencyType;
  }
}
export interface CloudBackupSchedulePolicyItemDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}
  */
  readonly retentionValue: number;
}

export function cloudBackupSchedulePolicyItemDailyToTerraform(struct?: CloudBackupSchedulePolicyItemDailyOutputReference | CloudBackupSchedulePolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}


export function cloudBackupSchedulePolicyItemDailyToHclTerraform(struct?: CloudBackupSchedulePolicyItemDailyOutputReference | CloudBackupSchedulePolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency_interval: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_unit: {
      value: cdktf.stringToHclTerraform(struct!.retentionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_value: {
      value: cdktf.numberToHclTerraform(struct!.retentionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupSchedulePolicyItemDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBackupSchedulePolicyItemDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupSchedulePolicyItemDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}
export interface CloudBackupSchedulePolicyItemHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}
  */
  readonly retentionValue: number;
}

export function cloudBackupSchedulePolicyItemHourlyToTerraform(struct?: CloudBackupSchedulePolicyItemHourlyOutputReference | CloudBackupSchedulePolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}


export function cloudBackupSchedulePolicyItemHourlyToHclTerraform(struct?: CloudBackupSchedulePolicyItemHourlyOutputReference | CloudBackupSchedulePolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency_interval: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_unit: {
      value: cdktf.stringToHclTerraform(struct!.retentionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_value: {
      value: cdktf.numberToHclTerraform(struct!.retentionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupSchedulePolicyItemHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBackupSchedulePolicyItemHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupSchedulePolicyItemHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}
export interface CloudBackupSchedulePolicyItemMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}
  */
  readonly retentionValue: number;
}

export function cloudBackupSchedulePolicyItemMonthlyToTerraform(struct?: CloudBackupSchedulePolicyItemMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}


export function cloudBackupSchedulePolicyItemMonthlyToHclTerraform(struct?: CloudBackupSchedulePolicyItemMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency_interval: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_unit: {
      value: cdktf.stringToHclTerraform(struct!.retentionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_value: {
      value: cdktf.numberToHclTerraform(struct!.retentionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupSchedulePolicyItemMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudBackupSchedulePolicyItemMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupSchedulePolicyItemMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}

export class CloudBackupSchedulePolicyItemMonthlyList extends cdktf.ComplexList {
  public internalValue? : CloudBackupSchedulePolicyItemMonthly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudBackupSchedulePolicyItemMonthlyOutputReference {
    return new CloudBackupSchedulePolicyItemMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBackupSchedulePolicyItemWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}
  */
  readonly retentionValue: number;
}

export function cloudBackupSchedulePolicyItemWeeklyToTerraform(struct?: CloudBackupSchedulePolicyItemWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}


export function cloudBackupSchedulePolicyItemWeeklyToHclTerraform(struct?: CloudBackupSchedulePolicyItemWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency_interval: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_unit: {
      value: cdktf.stringToHclTerraform(struct!.retentionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_value: {
      value: cdktf.numberToHclTerraform(struct!.retentionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupSchedulePolicyItemWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudBackupSchedulePolicyItemWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupSchedulePolicyItemWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}

export class CloudBackupSchedulePolicyItemWeeklyList extends cdktf.ComplexList {
  public internalValue? : CloudBackupSchedulePolicyItemWeekly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudBackupSchedulePolicyItemWeeklyOutputReference {
    return new CloudBackupSchedulePolicyItemWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudBackupSchedulePolicyItemYearly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#frequency_interval CloudBackupSchedule#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_unit CloudBackupSchedule#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#retention_value CloudBackupSchedule#retention_value}
  */
  readonly retentionValue: number;
}

export function cloudBackupSchedulePolicyItemYearlyToTerraform(struct?: CloudBackupSchedulePolicyItemYearly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}


export function cloudBackupSchedulePolicyItemYearlyToHclTerraform(struct?: CloudBackupSchedulePolicyItemYearly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency_interval: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_unit: {
      value: cdktf.stringToHclTerraform(struct!.retentionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_value: {
      value: cdktf.numberToHclTerraform(struct!.retentionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudBackupSchedulePolicyItemYearlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudBackupSchedulePolicyItemYearly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupSchedulePolicyItemYearly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}

export class CloudBackupSchedulePolicyItemYearlyList extends cdktf.ComplexList {
  public internalValue? : CloudBackupSchedulePolicyItemYearly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudBackupSchedulePolicyItemYearlyOutputReference {
    return new CloudBackupSchedulePolicyItemYearlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule}
*/
export class CloudBackupSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBackupSchedule to import
  * @param importFromId The id of the existing CloudBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.19.0/docs/resources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.19.0',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoExportEnabled = config.autoExportEnabled;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._referenceHourOfDay = config.referenceHourOfDay;
    this._referenceMinuteOfHour = config.referenceMinuteOfHour;
    this._restoreWindowDays = config.restoreWindowDays;
    this._updateSnapshots = config.updateSnapshots;
    this._useOrgAndGroupNamesInExportPrefix = config.useOrgAndGroupNamesInExportPrefix;
    this._copySettings.internalValue = config.copySettings;
    this._export.internalValue = config.export;
    this._policyItemDaily.internalValue = config.policyItemDaily;
    this._policyItemHourly.internalValue = config.policyItemHourly;
    this._policyItemMonthly.internalValue = config.policyItemMonthly;
    this._policyItemWeekly.internalValue = config.policyItemWeekly;
    this._policyItemYearly.internalValue = config.policyItemYearly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_export_enabled - computed: true, optional: true, required: false
  private _autoExportEnabled?: boolean | cdktf.IResolvable; 
  public get autoExportEnabled() {
    return this.getBooleanAttribute('auto_export_enabled');
  }
  public set autoExportEnabled(value: boolean | cdktf.IResolvable) {
    this._autoExportEnabled = value;
  }
  public resetAutoExportEnabled() {
    this._autoExportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportEnabledInput() {
    return this._autoExportEnabled;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // id_policy - computed: true, optional: false, required: false
  public get idPolicy() {
    return this.getStringAttribute('id_policy');
  }

  // next_snapshot - computed: true, optional: false, required: false
  public get nextSnapshot() {
    return this.getStringAttribute('next_snapshot');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // reference_hour_of_day - computed: true, optional: true, required: false
  private _referenceHourOfDay?: number; 
  public get referenceHourOfDay() {
    return this.getNumberAttribute('reference_hour_of_day');
  }
  public set referenceHourOfDay(value: number) {
    this._referenceHourOfDay = value;
  }
  public resetReferenceHourOfDay() {
    this._referenceHourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceHourOfDayInput() {
    return this._referenceHourOfDay;
  }

  // reference_minute_of_hour - computed: true, optional: true, required: false
  private _referenceMinuteOfHour?: number; 
  public get referenceMinuteOfHour() {
    return this.getNumberAttribute('reference_minute_of_hour');
  }
  public set referenceMinuteOfHour(value: number) {
    this._referenceMinuteOfHour = value;
  }
  public resetReferenceMinuteOfHour() {
    this._referenceMinuteOfHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceMinuteOfHourInput() {
    return this._referenceMinuteOfHour;
  }

  // restore_window_days - computed: true, optional: true, required: false
  private _restoreWindowDays?: number; 
  public get restoreWindowDays() {
    return this.getNumberAttribute('restore_window_days');
  }
  public set restoreWindowDays(value: number) {
    this._restoreWindowDays = value;
  }
  public resetRestoreWindowDays() {
    this._restoreWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreWindowDaysInput() {
    return this._restoreWindowDays;
  }

  // update_snapshots - computed: true, optional: true, required: false
  private _updateSnapshots?: boolean | cdktf.IResolvable; 
  public get updateSnapshots() {
    return this.getBooleanAttribute('update_snapshots');
  }
  public set updateSnapshots(value: boolean | cdktf.IResolvable) {
    this._updateSnapshots = value;
  }
  public resetUpdateSnapshots() {
    this._updateSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSnapshotsInput() {
    return this._updateSnapshots;
  }

  // use_org_and_group_names_in_export_prefix - computed: true, optional: true, required: false
  private _useOrgAndGroupNamesInExportPrefix?: boolean | cdktf.IResolvable; 
  public get useOrgAndGroupNamesInExportPrefix() {
    return this.getBooleanAttribute('use_org_and_group_names_in_export_prefix');
  }
  public set useOrgAndGroupNamesInExportPrefix(value: boolean | cdktf.IResolvable) {
    this._useOrgAndGroupNamesInExportPrefix = value;
  }
  public resetUseOrgAndGroupNamesInExportPrefix() {
    this._useOrgAndGroupNamesInExportPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrgAndGroupNamesInExportPrefixInput() {
    return this._useOrgAndGroupNamesInExportPrefix;
  }

  // copy_settings - computed: false, optional: true, required: false
  private _copySettings = new CloudBackupScheduleCopySettingsList(this, "copy_settings", false);
  public get copySettings() {
    return this._copySettings;
  }
  public putCopySettings(value: CloudBackupScheduleCopySettings[] | cdktf.IResolvable) {
    this._copySettings.internalValue = value;
  }
  public resetCopySettings() {
    this._copySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySettingsInput() {
    return this._copySettings.internalValue;
  }

  // export - computed: false, optional: true, required: false
  private _export = new CloudBackupScheduleExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: CloudBackupScheduleExport) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }

  // policy_item_daily - computed: false, optional: true, required: false
  private _policyItemDaily = new CloudBackupSchedulePolicyItemDailyOutputReference(this, "policy_item_daily");
  public get policyItemDaily() {
    return this._policyItemDaily;
  }
  public putPolicyItemDaily(value: CloudBackupSchedulePolicyItemDaily) {
    this._policyItemDaily.internalValue = value;
  }
  public resetPolicyItemDaily() {
    this._policyItemDaily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemDailyInput() {
    return this._policyItemDaily.internalValue;
  }

  // policy_item_hourly - computed: false, optional: true, required: false
  private _policyItemHourly = new CloudBackupSchedulePolicyItemHourlyOutputReference(this, "policy_item_hourly");
  public get policyItemHourly() {
    return this._policyItemHourly;
  }
  public putPolicyItemHourly(value: CloudBackupSchedulePolicyItemHourly) {
    this._policyItemHourly.internalValue = value;
  }
  public resetPolicyItemHourly() {
    this._policyItemHourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemHourlyInput() {
    return this._policyItemHourly.internalValue;
  }

  // policy_item_monthly - computed: false, optional: true, required: false
  private _policyItemMonthly = new CloudBackupSchedulePolicyItemMonthlyList(this, "policy_item_monthly", false);
  public get policyItemMonthly() {
    return this._policyItemMonthly;
  }
  public putPolicyItemMonthly(value: CloudBackupSchedulePolicyItemMonthly[] | cdktf.IResolvable) {
    this._policyItemMonthly.internalValue = value;
  }
  public resetPolicyItemMonthly() {
    this._policyItemMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemMonthlyInput() {
    return this._policyItemMonthly.internalValue;
  }

  // policy_item_weekly - computed: false, optional: true, required: false
  private _policyItemWeekly = new CloudBackupSchedulePolicyItemWeeklyList(this, "policy_item_weekly", false);
  public get policyItemWeekly() {
    return this._policyItemWeekly;
  }
  public putPolicyItemWeekly(value: CloudBackupSchedulePolicyItemWeekly[] | cdktf.IResolvable) {
    this._policyItemWeekly.internalValue = value;
  }
  public resetPolicyItemWeekly() {
    this._policyItemWeekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemWeeklyInput() {
    return this._policyItemWeekly.internalValue;
  }

  // policy_item_yearly - computed: false, optional: true, required: false
  private _policyItemYearly = new CloudBackupSchedulePolicyItemYearlyList(this, "policy_item_yearly", false);
  public get policyItemYearly() {
    return this._policyItemYearly;
  }
  public putPolicyItemYearly(value: CloudBackupSchedulePolicyItemYearly[] | cdktf.IResolvable) {
    this._policyItemYearly.internalValue = value;
  }
  public resetPolicyItemYearly() {
    this._policyItemYearly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemYearlyInput() {
    return this._policyItemYearly.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_export_enabled: cdktf.booleanToTerraform(this._autoExportEnabled),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      reference_hour_of_day: cdktf.numberToTerraform(this._referenceHourOfDay),
      reference_minute_of_hour: cdktf.numberToTerraform(this._referenceMinuteOfHour),
      restore_window_days: cdktf.numberToTerraform(this._restoreWindowDays),
      update_snapshots: cdktf.booleanToTerraform(this._updateSnapshots),
      use_org_and_group_names_in_export_prefix: cdktf.booleanToTerraform(this._useOrgAndGroupNamesInExportPrefix),
      copy_settings: cdktf.listMapper(cloudBackupScheduleCopySettingsToTerraform, true)(this._copySettings.internalValue),
      export: cloudBackupScheduleExportToTerraform(this._export.internalValue),
      policy_item_daily: cloudBackupSchedulePolicyItemDailyToTerraform(this._policyItemDaily.internalValue),
      policy_item_hourly: cloudBackupSchedulePolicyItemHourlyToTerraform(this._policyItemHourly.internalValue),
      policy_item_monthly: cdktf.listMapper(cloudBackupSchedulePolicyItemMonthlyToTerraform, true)(this._policyItemMonthly.internalValue),
      policy_item_weekly: cdktf.listMapper(cloudBackupSchedulePolicyItemWeeklyToTerraform, true)(this._policyItemWeekly.internalValue),
      policy_item_yearly: cdktf.listMapper(cloudBackupSchedulePolicyItemYearlyToTerraform, true)(this._policyItemYearly.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_export_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoExportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reference_hour_of_day: {
        value: cdktf.numberToHclTerraform(this._referenceHourOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reference_minute_of_hour: {
        value: cdktf.numberToHclTerraform(this._referenceMinuteOfHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restore_window_days: {
        value: cdktf.numberToHclTerraform(this._restoreWindowDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_snapshots: {
        value: cdktf.booleanToHclTerraform(this._updateSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_org_and_group_names_in_export_prefix: {
        value: cdktf.booleanToHclTerraform(this._useOrgAndGroupNamesInExportPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_settings: {
        value: cdktf.listMapperHcl(cloudBackupScheduleCopySettingsToHclTerraform, true)(this._copySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupScheduleCopySettingsList",
      },
      export: {
        value: cloudBackupScheduleExportToHclTerraform(this._export.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupScheduleExportList",
      },
      policy_item_daily: {
        value: cloudBackupSchedulePolicyItemDailyToHclTerraform(this._policyItemDaily.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupSchedulePolicyItemDailyList",
      },
      policy_item_hourly: {
        value: cloudBackupSchedulePolicyItemHourlyToHclTerraform(this._policyItemHourly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupSchedulePolicyItemHourlyList",
      },
      policy_item_monthly: {
        value: cdktf.listMapperHcl(cloudBackupSchedulePolicyItemMonthlyToHclTerraform, true)(this._policyItemMonthly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupSchedulePolicyItemMonthlyList",
      },
      policy_item_weekly: {
        value: cdktf.listMapperHcl(cloudBackupSchedulePolicyItemWeeklyToHclTerraform, true)(this._policyItemWeekly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupSchedulePolicyItemWeeklyList",
      },
      policy_item_yearly: {
        value: cdktf.listMapperHcl(cloudBackupSchedulePolicyItemYearlyToHclTerraform, true)(this._policyItemYearly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBackupSchedulePolicyItemYearlyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
